/* ================================================================
   CrackTCS — Gemini PYQ Application Logic
   Adapted for Gemini PYQ collection with hidden test cases support
   ================================================================ */

// Use geminiQuestions from gemini-questions.js
const questions = geminiQuestions;

// ==================== AUTH ====================
const AUTH = {
  token: localStorage.getItem('cracktcs_token') || null,
  username: localStorage.getItem('cracktcs_username') || null,
  async init() {
    if (this.token) {
      try {
        const res = await fetch('/api/me', {
          headers: { 'Authorization': `Bearer ${this.token}` }
        });
        if (res.ok) {
          const data = await res.json();
          this.username = data.user.username;
          this.onLoginSuccess(data, false);
          return;
        }
      } catch (e) { /* token invalid */ }
      this.token = null;
      localStorage.removeItem('cracktcs_token');
      localStorage.removeItem('cracktcs_username');
    }
    document.getElementById('auth-overlay').classList.remove('hidden');
  },

  onLoginSuccess(data, isNew) {
    this.token = data.token || this.token;
    this.username = data.user.username;
    localStorage.setItem('cracktcs_token', this.token);
    localStorage.setItem('cracktcs_username', this.username);

    // Use gemini-specific keys to avoid collision with main site
    const SKEY = 'gemini_solved';
    const CKEY = 'gemini_code';
    const STKEY = 'gemini_streak';
    const LSKEY = 'gemini_lastSolve';
    const RKEY = 'gemini_recent';

    const server = data.progress || {};
    const localSolved = JSON.parse(localStorage.getItem(SKEY) || '[]');
    const localCode = JSON.parse(localStorage.getItem(CKEY) || '{}');
    const localStreak = parseInt(localStorage.getItem(STKEY) || '0');
    const localLastSolve = localStorage.getItem(LSKEY) || '';
    const localRecent = JSON.parse(localStorage.getItem(RKEY) || '[]');

    // For Gemini, use local-only progress (server syncs main site)
    state.solvedSet = new Set(localSolved);
    state.codeStore = localCode;
    state.streak = localStreak;
    state.lastSolveDate = localLastSolve;
    state.recentSolved = localRecent;

    document.getElementById('auth-overlay').classList.add('hidden');
    document.getElementById('user-menu').style.display = 'flex';
    document.getElementById('display-username').textContent = this.username;

    renderProblems();
    updateStats();
    updateStreak();
  },

  saveProgress() {
    // Gemini progress saved locally only
    localStorage.setItem('gemini_solved', JSON.stringify([...state.solvedSet]));
    localStorage.setItem('gemini_code', JSON.stringify(state.codeStore));
    localStorage.setItem('gemini_streak', state.streak.toString());
    localStorage.setItem('gemini_lastSolve', state.lastSolveDate);
    localStorage.setItem('gemini_recent', JSON.stringify(state.recentSolved));
  },

  logout() {
    this.token = null;
    this.username = null;
    localStorage.removeItem('cracktcs_token');
    localStorage.removeItem('cracktcs_username');
    state.solvedSet = new Set();
    state.codeStore = {};
    state.streak = 0;
    state.lastSolveDate = '';
    state.recentSolved = [];
    document.getElementById('user-menu').style.display = 'none';
    document.getElementById('auth-overlay').classList.remove('hidden');
    renderProblems();
    updateStats();
  }
};

// ==================== STATE ====================
const state = {
  currentView: 'problems',
  currentQuestion: null,
  currentLanguage: 'python',
  editor: null,
  editorReady: false,
  solvedSet: new Set(JSON.parse(localStorage.getItem('gemini_solved') || '[]')),
  codeStore: JSON.parse(localStorage.getItem('gemini_code') || '{}'),
  streak: parseInt(localStorage.getItem('gemini_streak') || '0'),
  lastSolveDate: localStorage.getItem('gemini_lastSolve') || '',
  recentSolved: JSON.parse(localStorage.getItem('gemini_recent') || '[]'),
  isRunning: false,
  resizing: false
};

// ==================== WANDBOX API ====================
const WANDBOX_API = 'https://wandbox.org/api/compile.json';

const LANG_CONFIG = {
  python: { compiler: 'cpython-3.10.15', monacoLang: 'python' },
  javascript: { compiler: 'nodejs-18.20.4', monacoLang: 'javascript' },
  c: { compiler: 'gcc-13.2.0-c', monacoLang: 'c' },
  java: { compiler: 'openjdk-jdk-21+35', monacoLang: 'java' }
};

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  initMonaco();
  initNavigation();
  initFilters();
  initSolveView();
  initResizer();
  initDashboard();
  initAuth();
  renderProblems();
  updateStats();
  updateStreak();
  populateTagFilter();
  AUTH.init();
});

// ==================== AUTH UI ====================
function initAuth() {
  const form = document.getElementById('auth-form');
  const logoutBtn = document.getElementById('logout-btn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('auth-username').value.trim();
    const password = document.getElementById('auth-password').value;
    const errorDiv = document.getElementById('auth-error');
    const submitBtn = document.getElementById('auth-submit-btn');

    errorDiv.classList.add('hidden');
    submitBtn.disabled = true;
    document.getElementById('auth-btn-text').textContent = 'Signing in...';

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();

      if (!res.ok) {
        errorDiv.textContent = data.error || 'Something went wrong';
        errorDiv.classList.remove('hidden');
        return;
      }

      AUTH.onLoginSuccess(data, false);
      form.reset();
    } catch (err) {
      errorDiv.textContent = 'Network error. Please try again.';
      errorDiv.classList.remove('hidden');
    } finally {
      submitBtn.disabled = false;
      document.getElementById('auth-btn-text').textContent = 'Sign In';
    }
  });

  logoutBtn.addEventListener('click', () => AUTH.logout());
}

// ==================== MONACO EDITOR ====================
function initMonaco() {
  require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });
  require(['vs/editor/editor.main'], function () {
    monaco.editor.defineTheme('cracktcs-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'C586C0' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'number', foreground: 'B5CEA8' },
        { token: 'type', foreground: '4EC9B0' },
        { token: 'function', foreground: 'DCDCAA' },
      ],
      colors: {
        'editor.background': '#1e1e2e',
        'editor.foreground': '#d4d4d4',
        'editor.lineHighlightBackground': '#2a2a3e',
        'editor.selectionBackground': '#264f78',
        'editorCursor.foreground': '#a78bfa',
        'editor.inactiveSelectionBackground': '#3a3d41',
        'editorLineNumber.foreground': '#5c5f73',
        'editorLineNumber.activeForeground': '#a78bfa',
      }
    });

    state.editor = monaco.editor.create(document.getElementById('editor-container'), {
      value: '# Select a problem to start coding!\n',
      language: 'python',
      theme: 'cracktcs-dark',
      fontSize: 14,
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
      fontLigatures: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      padding: { top: 12, bottom: 12 },
      lineNumbers: 'on',
      renderLineHighlight: 'line',
      tabSize: 4,
      insertSpaces: true,
      wordWrap: 'on',
      suggest: { showWords: true },
      quickSuggestions: true,
      bracketPairColorization: { enabled: true },
      smoothScrolling: true,
      cursorBlinking: 'smooth',
      cursorSmoothCaretAnimation: 'on',
    });

    let _saveTimer = null;
    state.editor.onDidChangeModelContent(() => {
      if (state.currentQuestion) {
        const key = `${state.currentQuestion.id}_${state.currentLanguage}`;
        state.codeStore[key] = state.editor.getValue();
        localStorage.setItem('gemini_code', JSON.stringify(state.codeStore));
        clearTimeout(_saveTimer);
        _saveTimer = setTimeout(() => AUTH.saveProgress(), 2000);
      }
    });

    state.editorReady = true;
  });
}

// ==================== NAVIGATION ====================
function initNavigation() {
  document.querySelectorAll('.nav-link[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      switchView(view);
    });
  });
}

function switchView(viewName) {
  document.querySelectorAll('.nav-link[data-view]').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-view="${viewName}"]`);
  if (activeLink) activeLink.classList.add('active');

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(`${viewName}-view`);
  if (target) target.classList.add('active');

  state.currentView = viewName;
  if (viewName === 'dashboard') renderDashboard();
}

// ==================== PROBLEMS LIST ====================
function renderProblems(filteredQuestions = null) {
  const tbody = document.getElementById('problems-tbody');
  const list = filteredQuestions || questions;

  tbody.innerHTML = list.map(q => {
    const isSolved = state.solvedSet.has(q.id);
    const diffClass = q.difficulty.toLowerCase();
    const hasHidden = q.hiddenTests && q.hiddenTests.length > 0;
    return `
      <tr data-id="${q.id}">
        <td class="col-status">
          <span class="status-icon ${isSolved ? 'solved' : 'unsolved'}">
            ${isSolved ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>'}
          </span>
        </td>
        <td class="col-id">${q.id}</td>
        <td class="col-title">
          <span class="problem-title-link">${q.title}</span>
          ${hasHidden ? '<span class="hidden-test-label"><i class="fas fa-eye-slash"></i> Hidden</span>' : ''}
        </td>
        <td class="col-category"><span class="cat-label">${q.category}</span></td>
        <td class="col-difficulty">
          <span class="diff-label ${diffClass}">${q.difficulty}</span>
        </td>
        <td class="col-tags">
          <div class="tag-chips">
            ${q.tags.slice(0, 3).map(t => `<span class="tag-chip">${t}</span>`).join('')}
          </div>
        </td>
      </tr>
    `;
  }).join('');

  tbody.querySelectorAll('tr').forEach(row => {
    row.addEventListener('click', () => {
      const id = parseInt(row.dataset.id);
      openProblem(id);
    });
  });

  updateStats(list);
}

function updateStats(list = questions) {
  const total = list.length;
  const easy = list.filter(q => q.difficulty === 'Easy').length;
  const medium = list.filter(q => q.difficulty === 'Medium').length;
  const hard = list.filter(q => q.difficulty === 'Hard').length;
  const solved = list.filter(q => state.solvedSet.has(q.id)).length;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-easy').textContent = easy;
  document.getElementById('stat-medium').textContent = medium;
  document.getElementById('stat-hard').textContent = hard;
  document.getElementById('stat-solved').textContent = solved;
  document.getElementById('hero-total').textContent = questions.length;
  document.getElementById('nav-solved').textContent = state.solvedSet.size;
  document.getElementById('nav-total').textContent = questions.length;
}

// ==================== FILTERS ====================
function initFilters() {
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const difficultyFilter = document.getElementById('difficulty-filter');
  const statusFilter = document.getElementById('status-filter');
  const tagFilter = document.getElementById('tag-filter');

  const applyFilters = () => {
    const search = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;
    const difficulty = difficultyFilter.value;
    const status = statusFilter.value;
    const tag = tagFilter.value;

    let filtered = questions.filter(q => {
      if (search && !q.title.toLowerCase().includes(search) &&
          !q.tags.some(t => t.toLowerCase().includes(search)) &&
          !q.id.toString().includes(search)) return false;
      if (category !== 'all' && q.category !== category) return false;
      if (difficulty !== 'all' && q.difficulty !== difficulty) return false;
      if (status === 'solved' && !state.solvedSet.has(q.id)) return false;
      if (status === 'unsolved' && state.solvedSet.has(q.id)) return false;
      if (tag !== 'all' && !q.tags.includes(tag)) return false;
      return true;
    });

    renderProblems(filtered);
  };

  searchInput.addEventListener('input', applyFilters);
  categoryFilter.addEventListener('change', applyFilters);
  difficultyFilter.addEventListener('change', applyFilters);
  statusFilter.addEventListener('change', applyFilters);
  tagFilter.addEventListener('change', applyFilters);
}

function populateTagFilter() {
  const tagFilter = document.getElementById('tag-filter');
  const tags = [...new Set(questions.flatMap(q => q.tags))].sort();
  tags.forEach(tag => {
    const opt = document.createElement('option');
    opt.value = tag;
    opt.textContent = tag;
    tagFilter.appendChild(opt);
  });
}

// ==================== SOLVE VIEW ====================
function initSolveView() {
  document.getElementById('back-btn').addEventListener('click', () => {
    switchView('problems');
    renderProblems();
  });

  document.getElementById('prev-btn').addEventListener('click', () => navigateProblem(-1));
  document.getElementById('next-btn').addEventListener('click', () => navigateProblem(1));

  document.getElementById('language-select').addEventListener('change', (e) => {
    state.currentLanguage = e.target.value;
    loadEditorCode();
  });

  document.getElementById('reset-btn').addEventListener('click', () => {
    if (state.currentQuestion) {
      const q = state.currentQuestion;
      const lang = state.currentLanguage;
      const code = q.starterCode[lang] || '// No starter code';
      state.editor.setValue(code);
      const key = `${q.id}_${lang}`;
      delete state.codeStore[key];
      localStorage.setItem('gemini_code', JSON.stringify(state.codeStore));
      AUTH.saveProgress();
      showToast('Code reset to starter template', 'info');
    }
  });

  document.getElementById('fullscreen-btn').addEventListener('click', () => {
    const rightPanel = document.getElementById('right-panel');
    if (!document.fullscreenElement) {
      rightPanel.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  });

  // Run button
  document.getElementById('run-btn').addEventListener('click', () => runCode(false));

  // Submit button — runs visible + hidden tests
  document.getElementById('submit-btn').addEventListener('click', () => runCode(true));

  // Panel tabs
  document.querySelectorAll('.panel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      document.getElementById('description-content').classList.toggle('hidden', target !== 'description');
      document.getElementById('editorial-content').classList.toggle('hidden', target !== 'editorial');
    });
  });

  // Output tabs
  document.querySelectorAll('.output-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.output-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.output;
      document.getElementById('testcase-panel').classList.toggle('hidden', target !== 'testcase');
      document.getElementById('result-panel').classList.toggle('hidden', target !== 'result');
    });
  });

  // Output toggle
  document.getElementById('output-toggle').addEventListener('click', () => {
    const outputSection = document.getElementById('output-section');
    const icon = document.querySelector('#output-toggle i');
    outputSection.classList.toggle('collapsed');
    if (outputSection.classList.contains('collapsed')) {
      outputSection.style.minHeight = '44px';
      outputSection.style.maxHeight = '44px';
      icon.className = 'fas fa-chevron-up';
    } else {
      outputSection.style.minHeight = '120px';
      outputSection.style.maxHeight = '40%';
      icon.className = 'fas fa-chevron-down';
    }
  });
}

function openProblem(id) {
  const q = questions.find(q => q.id === id);
  if (!q) return;

  state.currentQuestion = q;
  state.currentLanguage = document.getElementById('language-select').value;

  switchView('solve');

  document.getElementById('problem-title').textContent = `${q.id}. ${q.title}`;
  document.getElementById('problem-nav-title').textContent = `${q.id} / ${questions.length}`;

  const diffBadge = document.getElementById('problem-difficulty');
  diffBadge.textContent = q.difficulty;
  diffBadge.className = `badge diff-badge ${q.difficulty}`;

  document.getElementById('problem-category').textContent = q.category;

  document.getElementById('problem-tags').innerHTML = q.tags
    .map(t => `<span class="tag-chip">${t}</span>`).join('');

  renderDescription(q);
  renderHints(q);
  loadEditorCode();

  // Show hidden test info
  const hiddenInfo = document.getElementById('hidden-test-info');
  if (q.hiddenTests && q.hiddenTests.length > 0) {
    hiddenInfo.style.display = 'flex';
    document.getElementById('hidden-count').textContent = q.hiddenTests.length;
  } else {
    hiddenInfo.style.display = 'none';
  }

  if (q.examples && q.examples.length > 0) {
    document.getElementById('custom-input').value = cleanExampleInput(q.examples[0].input);
  }

  document.getElementById('execution-result').innerHTML = `<p class="result-placeholder">Run or Submit your code to see results here.</p>`;

  // Reset tabs
  document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.panel-tab[data-tab="description"]').classList.add('active');
  document.getElementById('description-content').classList.remove('hidden');
  document.getElementById('editorial-content').classList.add('hidden');

  document.querySelectorAll('.output-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.output-tab[data-output="testcase"]').classList.add('active');
  document.getElementById('testcase-panel').classList.remove('hidden');
  document.getElementById('result-panel').classList.add('hidden');
}

function cleanExampleInput(input) {
  let s = String(input);
  if (s.startsWith('"') && s.endsWith('"')) s = s.slice(1, -1);
  return s;
}

function renderDescription(q) {
  let html = '';
  html += `<p>${escapeHtml(q.description)}</p>`;

  if (q.examples && q.examples.length > 0) {
    html += '<h3>Examples</h3>';
    q.examples.forEach((ex, i) => {
      html += `
        <div class="example-block">
          <div class="label">Example ${i + 1}</div>
          <pre><strong>Input:</strong> ${escapeHtml(String(ex.input))}</pre>
          <pre><strong>Output:</strong> ${escapeHtml(String(ex.output))}</pre>
        </div>`;
    });
  }

  if (q.constraints && q.constraints.length > 0) {
    html += '<h3>Constraints</h3><ul class="constraints-list">';
    q.constraints.forEach(c => {
      html += `<li><code>${escapeHtml(c)}</code></li>`;
    });
    html += '</ul>';
  }

  // Hidden test notice
  if (q.hiddenTests && q.hiddenTests.length > 0) {
    html += `<div class="hidden-tests-summary">
      <i class="fas fa-eye-slash"></i>
      <span>+ ${q.hiddenTests.length} hidden test cases (checked on Submit)</span>
    </div>`;
  }

  document.getElementById('problem-description').innerHTML = html;
}

function renderHints(q) {
  const hintsSection = document.getElementById('hints-section');
  let html = '';

  html += `
    <div class="hint-card">
      <div class="hint-header" onclick="this.nextElementSibling.classList.toggle('show')">
        <span>💡 Hint 1 — Related Topics</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="hint-body">
        This problem can be solved using: <strong>${q.tags.join(', ')}</strong>.
        Think about which data structures or algorithms from these topics would help.
      </div>
    </div>`;

  const approachHints = {
    'Easy': 'Start with a simple brute-force approach. Think about looping through the data and checking each element.',
    'Medium': 'Consider if you can optimize with hashing, sorting, or a two-pointer technique. Think about the time complexity.',
    'Hard': 'This requires an advanced technique. Consider dynamic programming, divide & conquer, or graph algorithms. Break the problem into subproblems.'
  };
  html += `
    <div class="hint-card">
      <div class="hint-header" onclick="this.nextElementSibling.classList.toggle('show')">
        <span>🧠 Hint 2 — Approach</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="hint-body">${approachHints[q.difficulty]}</div>
    </div>`;

  if (q.solution) {
    html += `
      <div class="hint-card">
        <div class="hint-header" onclick="this.nextElementSibling.classList.toggle('show')">
          <span>✅ Solution (Python)</span>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="hint-body">
          <pre style="background: var(--bg-input); padding: 14px; border-radius: 8px; overflow-x: auto; font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.6; color: var(--green);">${escapeHtml(q.solution)}</pre>
        </div>
      </div>`;
  }

  hintsSection.innerHTML = html;
}

function loadEditorCode() {
  if (!state.editorReady || !state.currentQuestion) return;

  const q = state.currentQuestion;
  const lang = state.currentLanguage;
  const key = `${q.id}_${lang}`;
  const storedCode = state.codeStore[key];
  const code = storedCode || q.starterCode[lang] || `// No starter code for ${lang}`;

  const monacoLang = LANG_CONFIG[lang]?.monacoLang || 'plaintext';
  monaco.editor.setModelLanguage(state.editor.getModel(), monacoLang);
  state.editor.setValue(code);
}

function navigateProblem(direction) {
  if (!state.currentQuestion) return;
  const currentIndex = questions.findIndex(q => q.id === state.currentQuestion.id);
  const newIndex = currentIndex + direction;
  if (newIndex >= 0 && newIndex < questions.length) {
    openProblem(questions[newIndex].id);
  }
}

// ==================== CODE EXECUTION ====================
async function runCode(isSubmit) {
  if (state.isRunning) return;
  if (!state.currentQuestion || !state.editorReady) return;

  const code = state.editor.getValue();
  const lang = state.currentLanguage;
  const q = state.currentQuestion;

  if (!code.trim()) {
    showToast('Please write some code first!', 'error');
    return;
  }

  state.isRunning = true;
  showLoading(true);

  // Switch to result tab
  document.querySelectorAll('.output-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.output-tab[data-output="result"]').classList.add('active');
  document.getElementById('testcase-panel').classList.add('hidden');
  document.getElementById('result-panel').classList.remove('hidden');

  const resultDiv = document.getElementById('execution-result');

  if (isSubmit) {
    // Run against visible examples + hidden tests
    await runAgainstAllTests(code, lang, q, resultDiv);
  } else {
    // Run with custom input
    const input = document.getElementById('custom-input').value;
    await runSingleExecution(code, lang, input, resultDiv);
  }

  state.isRunning = false;
  showLoading(false);
}

async function runSingleExecution(code, lang, input, resultDiv) {
  try {
    const result = await executeCode(code, lang, input);

    if (result.error) {
      resultDiv.innerHTML = `
        <div class="overall-result error">⚠️ Runtime Error</div>
        <div class="test-result-card fail">
          <div class="test-result-body">
            <div class="test-result-row">
              <span class="test-result-label">Error:</span>
              <span class="test-result-value">${escapeHtml(result.error)}</span>
            </div>
          </div>
        </div>`;
    } else {
      resultDiv.innerHTML = `
        <div class="overall-result accepted">✅ Execution Successful</div>
        <div class="test-result-card pass">
          <div class="test-result-body">
            ${input ? `<div class="test-result-row">
              <span class="test-result-label">Input:</span>
              <span class="test-result-value">${escapeHtml(input)}</span>
            </div>` : ''}
            <div class="test-result-row">
              <span class="test-result-label">Output:</span>
              <span class="test-result-value">${escapeHtml(result.output)}</span>
            </div>
          </div>
        </div>`;
    }
  } catch (err) {
    resultDiv.innerHTML = `
      <div class="overall-result error">⚠️ Execution Failed</div>
      <div class="test-result-card fail">
        <div class="test-result-body">
          <div class="test-result-row">
            <span class="test-result-label">Error:</span>
            <span class="test-result-value">${escapeHtml(err.message || 'Network error.')}</span>
          </div>
        </div>
      </div>`;
  }
}

async function runAgainstAllTests(code, lang, question, resultDiv) {
  const examples = question.examples || [];
  const hiddenTests = question.hiddenTests || [];

  if (examples.length === 0 && hiddenTests.length === 0) {
    resultDiv.innerHTML = `<p class="result-placeholder">No test cases available for this problem.</p>`;
    return;
  }

  let allPassed = true;
  let html = '';
  let passCount = 0;
  let totalTests = examples.length + hiddenTests.length;
  let testNum = 0;

  // Run visible examples
  for (let i = 0; i < examples.length; i++) {
    testNum++;
    const ex = examples[i];
    const input = cleanExampleInput(ex.input);
    const expectedRaw = String(ex.output).replace(/^"|"$/g, '').trim();

    try {
      const result = await executeCode(code, lang, input);

      if (result.error) {
        allPassed = false;
        html += `
          <div class="test-result-card fail">
            <div class="test-result-header">
              <span class="test-result-status fail">❌ Test ${testNum} — Runtime Error</span>
            </div>
            <div class="test-result-body">
              <div class="test-result-row">
                <span class="test-result-label">Input:</span>
                <span class="test-result-value">${escapeHtml(input)}</span>
              </div>
              <div class="test-result-row">
                <span class="test-result-label">Error:</span>
                <span class="test-result-value">${escapeHtml(result.error)}</span>
              </div>
            </div>
          </div>`;
      } else {
        const actualOutput = result.output.trim();
        const passed = actualOutput === expectedRaw;
        if (!passed) allPassed = false;
        if (passed) passCount++;

        html += `
          <div class="test-result-card ${passed ? 'pass' : 'fail'}">
            <div class="test-result-header">
              <span class="test-result-status ${passed ? 'pass' : 'fail'}">${passed ? '✅' : '❌'} Test ${testNum} — ${passed ? 'Passed' : 'Failed'}</span>
            </div>
            <div class="test-result-body">
              <div class="test-result-row">
                <span class="test-result-label">Input:</span>
                <span class="test-result-value">${escapeHtml(input)}</span>
              </div>
              <div class="test-result-row">
                <span class="test-result-label">Expected:</span>
                <span class="test-result-value">${escapeHtml(expectedRaw)}</span>
              </div>
              <div class="test-result-row">
                <span class="test-result-label">Got:</span>
                <span class="test-result-value">${escapeHtml(actualOutput)}</span>
              </div>
            </div>
          </div>`;
      }
    } catch (err) {
      allPassed = false;
      html += `
        <div class="test-result-card fail">
          <div class="test-result-header">
            <span class="test-result-status fail">❌ Test ${testNum} — Error</span>
          </div>
          <div class="test-result-body">
            <div class="test-result-row">
              <span class="test-result-label">Error:</span>
              <span class="test-result-value">${escapeHtml(err.message || 'Execution failed')}</span>
            </div>
          </div>
        </div>`;
    }
  }

  // Run hidden tests
  if (hiddenTests.length > 0) {
    html += `<div class="hidden-tests-summary"><i class="fas fa-eye-slash"></i> <strong>Hidden Test Cases</strong></div>`;

    for (let i = 0; i < hiddenTests.length; i++) {
      testNum++;
      const ht = hiddenTests[i];
      const input = cleanExampleInput(ht.input);
      const expectedRaw = String(ht.output).replace(/^"|"$/g, '').trim();

      try {
        const result = await executeCode(code, lang, input);

        if (result.error) {
          allPassed = false;
          html += `
            <div class="test-result-card fail hidden-test">
              <div class="test-result-header">
                <span class="test-result-status fail">❌ Hidden Test ${i + 1} — Runtime Error</span>
                <span class="hidden-test-label"><i class="fas fa-eye-slash"></i> Hidden</span>
              </div>
              <div class="test-result-body">
                <div class="test-result-row">
                  <span class="test-result-label">Error:</span>
                  <span class="test-result-value">${escapeHtml(result.error)}</span>
                </div>
              </div>
            </div>`;
        } else {
          const actualOutput = result.output.trim();
          const passed = actualOutput === expectedRaw;
          if (!passed) allPassed = false;
          if (passed) passCount++;

          html += `
            <div class="test-result-card ${passed ? 'pass' : 'fail'} hidden-test">
              <div class="test-result-header">
                <span class="test-result-status ${passed ? 'pass' : 'fail'}">${passed ? '✅' : '❌'} Hidden Test ${i + 1} — ${passed ? 'Passed' : 'Failed'}</span>
                <span class="hidden-test-label"><i class="fas fa-eye-slash"></i> Hidden</span>
              </div>
              <div class="test-result-body">
                <div class="test-result-row">
                  <span class="test-result-label">Input:</span>
                  <span class="test-result-value">${escapeHtml(input)}</span>
                </div>
                <div class="test-result-row">
                  <span class="test-result-label">Expected:</span>
                  <span class="test-result-value">${escapeHtml(expectedRaw)}</span>
                </div>
                <div class="test-result-row">
                  <span class="test-result-label">Got:</span>
                  <span class="test-result-value">${escapeHtml(actualOutput)}</span>
                </div>
              </div>
            </div>`;
        }
      } catch (err) {
        allPassed = false;
        html += `
          <div class="test-result-card fail hidden-test">
            <div class="test-result-header">
              <span class="test-result-status fail">❌ Hidden Test ${i + 1} — Error</span>
              <span class="hidden-test-label"><i class="fas fa-eye-slash"></i> Hidden</span>
            </div>
            <div class="test-result-body">
              <div class="test-result-row">
                <span class="test-result-label">Error:</span>
                <span class="test-result-value">${escapeHtml(err.message || 'Execution failed')}</span>
              </div>
            </div>
          </div>`;
      }
    }
  }

  const overallClass = allPassed ? 'accepted' : 'rejected';
  const overallText = allPassed
    ? `🎉 Accepted — All ${totalTests} tests passed! (${examples.length} visible + ${hiddenTests.length} hidden)`
    : `❌ Wrong Answer — ${passCount}/${totalTests} tests passed`;

  resultDiv.innerHTML = `<div class="overall-result ${overallClass}">${overallText}</div>${html}`;

  if (allPassed) {
    markSolved(question.id);
  }
}

async function executeCode(code, language, input = '') {
  const langConfig = LANG_CONFIG[language];
  if (!langConfig) return { error: `Unsupported language: ${language}` };

  let finalCode = code;
  if (language === 'java') {
    finalCode = code.replace(/public\s+class\s+(\w+)/g, 'class $1');
  }

  const payload = {
    code: finalCode,
    compiler: langConfig.compiler,
    stdin: input || ''
  };

  const response = await fetch(WANDBOX_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (data.compiler_error && data.compiler_error.trim()) {
    return { error: data.compiler_error, output: '' };
  }

  if (data.program_error && data.program_error.trim() && data.status !== '0') {
    return { error: data.program_error, output: data.program_output || '' };
  }

  if (data.program_output !== undefined) {
    return { output: data.program_output || '', error: null };
  }

  return { error: 'No output received', output: '' };
}

// ==================== PROGRESS TRACKING ====================
function markSolved(questionId) {
  if (state.solvedSet.has(questionId)) return;

  state.solvedSet.add(questionId);

  const q = questions.find(q => q.id === questionId);
  if (q) {
    state.recentSolved = state.recentSolved.filter(r => r.id !== questionId);
    state.recentSolved.unshift({ id: q.id, title: q.title, difficulty: q.difficulty, date: new Date().toISOString() });
    if (state.recentSolved.length > 20) state.recentSolved.pop();
  }

  updateStreak(true);
  AUTH.saveProgress();
  updateStats();
  showToast(`🎉 Problem "${q?.title}" solved!`, 'success');
}

function updateStreak(justSolved = false) {
  const today = new Date().toDateString();
  const lastDate = state.lastSolveDate;

  if (justSolved) {
    if (lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (lastDate === yesterday.toDateString()) {
        state.streak++;
      } else {
        state.streak = 1;
      }
      state.lastSolveDate = today;
    }
  } else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (lastDate !== today && lastDate !== yesterday.toDateString() && lastDate !== '') {
      state.streak = 0;
    }
  }

  document.getElementById('streak-count').textContent = state.streak;
}

// ==================== RESIZER ====================
function initResizer() {
  const resizer = document.getElementById('resizer');
  const leftPanel = document.getElementById('left-panel');
  const solveContainer = document.querySelector('.solve-container');

  let startX, startWidth;

  resizer.addEventListener('mousedown', (e) => {
    state.resizing = true;
    startX = e.clientX;
    startWidth = leftPanel.getBoundingClientRect().width;
    resizer.classList.add('active');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!state.resizing) return;
    const containerWidth = solveContainer.getBoundingClientRect().width;
    const newWidth = startWidth + (e.clientX - startX);
    const minW = 320;
    const maxW = containerWidth - 420;
    const clampedWidth = Math.max(minW, Math.min(maxW, newWidth));
    leftPanel.style.width = clampedWidth + 'px';
  });

  document.addEventListener('mouseup', () => {
    if (!state.resizing) return;
    state.resizing = false;
    resizer.classList.remove('active');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  });
}

// ==================== DASHBOARD ====================
function initDashboard() {
  renderDashboard();
}

function renderDashboard() {
  const totalSolved = state.solvedSet.size;
  const total = questions.length;

  document.getElementById('dash-solved').textContent = totalSolved;
  document.getElementById('dash-total').textContent = total;

  const easySolved = questions.filter(q => q.difficulty === 'Easy' && state.solvedSet.has(q.id)).length;
  const medSolved = questions.filter(q => q.difficulty === 'Medium' && state.solvedSet.has(q.id)).length;
  const hardSolved = questions.filter(q => q.difficulty === 'Hard' && state.solvedSet.has(q.id)).length;

  document.getElementById('dash-easy').textContent = `${easySolved}/${geminiDifficultyStats.Easy}`;
  document.getElementById('dash-medium').textContent = `${medSolved}/${geminiDifficultyStats.Medium}`;
  document.getElementById('dash-hard').textContent = `${hardSolved}/${geminiDifficultyStats.Hard}`;

  const catBars = document.getElementById('category-bars');
  const cats = [...new Set(questions.map(q => q.category))];
  catBars.innerHTML = cats.map(cat => {
    const catTotal = questions.filter(q => q.category === cat).length;
    const catSolved = questions.filter(q => q.category === cat && state.solvedSet.has(q.id)).length;
    const pct = catTotal > 0 ? Math.round((catSolved / catTotal) * 100) : 0;
    return `
      <div class="cat-bar-item">
        <div class="cat-bar-header">
          <span class="cat-bar-name">${cat}</span>
          <span class="cat-bar-count">${catSolved} / ${catTotal}</span>
        </div>
        <div class="cat-bar-track">
          <div class="cat-bar-fill" style="width: ${pct}%"></div>
        </div>
      </div>`;
  }).join('');

  const recentList = document.getElementById('recent-list');
  if (state.recentSolved.length === 0) {
    recentList.innerHTML = `<p class="empty-state">No problems solved yet. Start practicing!</p>`;
  } else {
    recentList.innerHTML = state.recentSolved.slice(0, 10).map(r => {
      const diffClass = r.difficulty.toLowerCase();
      return `
        <div class="recent-item" onclick="openProblem(${r.id})">
          <span class="ri-icon"><i class="fas fa-check-circle"></i></span>
          <span class="ri-title">${r.id}. ${r.title}</span>
          <span class="ri-diff diff-label ${diffClass}">${r.difficulty}</span>
        </div>`;
    }).join('');
  }
}

// ==================== UTILITY ====================
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function showLoading(show) {
  document.getElementById('loading-overlay').classList.toggle('hidden', !show);
}

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    if (state.currentView === 'solve') runCode(false);
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Enter') {
    e.preventDefault();
    if (state.currentView === 'solve') runCode(true);
  }
  if (e.key === 'Escape' && state.currentView === 'solve') {
    switchView('problems');
    renderProblems();
  }
});

/* ================================================================
   CrackTCS — Express Server with Authentication
   Handles user auth & progress persistence for web hosting
   ================================================================ */

require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const IS_VERCEL = !!process.env.VERCEL;

// On Vercel use /tmp (ephemeral but writable); locally use ./data
const DATA_DIR = IS_VERCEL ? '/tmp' : path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'users.json');
const SECRET_FILE = path.join(DATA_DIR, '.jwt-secret');

// Auto-generate a strong JWT secret and persist it so tokens survive restarts
function getJwtSecret() {
  if (process.env.JWT_SECRET) return process.env.JWT_SECRET;
  if (!IS_VERCEL) {
    // Local dev: persist to file
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (fs.existsSync(SECRET_FILE)) return fs.readFileSync(SECRET_FILE, 'utf8').trim();
    const secret = crypto.randomBytes(64).toString('hex');
    fs.writeFileSync(SECRET_FILE, secret);
    return secret;
  }
  // Vercel: JWT_SECRET env var is required
  console.error('Set JWT_SECRET env var on Vercel!');
  return crypto.randomBytes(64).toString('hex');
}
const JWT_SECRET = getJwtSecret();

// ==================== MIDDLEWARE ====================

// Security headers (XSS, clickjacking, MIME sniffing, etc.)
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdnjs.cloudflare.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
      connectSrc: ["'self'", "https://wandbox.org"],
      imgSrc: ["'self'", "data:"],
      workerSrc: ["'self'", "blob:"],
    }
  }
}));

// CORS — restrict to same origin only (no cross-site API calls)
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (same-origin, curl, mobile apps)
    if (!origin) return callback(null, true);
    // In production, set your actual domain here
    const allowed = process.env.ALLOWED_ORIGIN || null;
    if (allowed && origin === allowed) return callback(null, true);
    if (!allowed) return callback(null, true); // allow all if not configured
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

// Rate limiting — general (100 req/min) and strict for login (5 attempts/min)
const generalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later' }
});

const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many login attempts. Please wait a minute and try again.' }
});

app.use(generalLimiter);
app.use(express.json({ limit: '5mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ==================== DATABASE HELPERS ====================
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2));
  }
}

function readDB() {
  ensureDataDir();
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch {
    return { users: [] };
  }
}

function writeDB(data) {
  ensureDataDir();
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

function findUser(username) {
  const db = readDB();
  return db.users.find(u => u.username.toLowerCase() === username.toLowerCase());
}

// ==================== AUTH MIDDLEWARE ====================
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// ==================== USER CREDENTIALS (from env) ====================
const AUTH_USERNAME = process.env.AUTH_USERNAME;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD;
if (!AUTH_USERNAME || !AUTH_PASSWORD) {
  if (!IS_VERCEL) {
    console.error('\n\u274c AUTH_USERNAME and AUTH_PASSWORD must be set in .env or environment variables!\n');
    process.exit(1);
  }
}

// ==================== ACCOUNT LOCKOUT ====================
const failedAttempts = new Map(); // IP → { count, lockedUntil }
const MAX_FAILED = 10;            // lock after 10 failures
const LOCKOUT_MINUTES = 15;       // lock for 15 minutes

function checkLockout(ip) {
  const record = failedAttempts.get(ip);
  if (!record) return false;
  if (record.lockedUntil && Date.now() < record.lockedUntil) return true;
  if (record.lockedUntil && Date.now() >= record.lockedUntil) {
    failedAttempts.delete(ip);
    return false;
  }
  return false;
}

function recordFailure(ip) {
  const record = failedAttempts.get(ip) || { count: 0, lockedUntil: null };
  record.count++;
  if (record.count >= MAX_FAILED) {
    record.lockedUntil = Date.now() + LOCKOUT_MINUTES * 60 * 1000;
    console.warn(`⚠️  IP ${ip} locked out for ${LOCKOUT_MINUTES} min after ${record.count} failed attempts`);
  }
  failedAttempts.set(ip, record);
}

function clearFailures(ip) {
  failedAttempts.delete(ip);
}

// ==================== AUTH ROUTES ====================

// Login — rate limited + account lockout
app.post('/api/login', loginLimiter, (req, res) => {
  try {
    const clientIp = req.ip;

    // Check lockout
    if (checkLockout(clientIp)) {
      const record = failedAttempts.get(clientIp);
      const minsLeft = Math.ceil((record.lockedUntil - Date.now()) / 60000);
      return res.status(429).json({ error: `Account locked. Try again in ${minsLeft} minute(s).` });
    }

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    if (username !== AUTH_USERNAME || password !== AUTH_PASSWORD) {
      recordFailure(clientIp);
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Successful login — clear any failed attempts
    clearFailures(clientIp);

    // Auto-create user in DB on first login
    let user = findUser(username);
    if (!user) {
      const db = readDB();
      user = {
        id: 'col04-main',
        username: AUTH_USERNAME,
        createdAt: new Date().toISOString(),
        progress: { solvedIds: [], codeStore: {}, streak: 0, lastSolveDate: '', recentSolved: [] }
      };
      db.users.push(user);
      writeDB(db);
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '30d' });

    res.json({
      token,
      user: { id: user.id, username: user.username },
      progress: user.progress
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Verify token (auto-login)
app.get('/api/me', authMiddleware, (req, res) => {
  const user = findUser(req.user.username);
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json({
    user: { id: user.id, username: user.username },
    progress: user.progress
  });
});

// ==================== PROGRESS ROUTES ====================

// Save progress
app.post('/api/progress', authMiddleware, (req, res) => {
  try {
    const { solvedIds, codeStore, streak, lastSolveDate, recentSolved } = req.body;
    const db = readDB();
    const user = db.users.find(u => u.id === req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.progress = {
      solvedIds: solvedIds || user.progress.solvedIds,
      codeStore: codeStore || user.progress.codeStore,
      streak: streak !== undefined ? streak : user.progress.streak,
      lastSolveDate: lastSolveDate !== undefined ? lastSolveDate : user.progress.lastSolveDate,
      recentSolved: recentSolved || user.progress.recentSolved
    };

    writeDB(db);
    res.json({ success: true });
  } catch (err) {
    console.error('Save progress error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get progress
app.get('/api/progress', authMiddleware, (req, res) => {
  const user = findUser(req.user.username);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user.progress);
});

// ==================== CATCH-ALL (SPA) ====================
if (!IS_VERCEL) {
  app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

// ==================== START ====================
if (!IS_VERCEL) {
  app.listen(PORT, () => {
    ensureDataDir();
    console.log(`\n\ud83d\ude80 CrackTCS server running at http://localhost:${PORT}\n`);
  });
}

// Export for Vercel serverless
module.exports = app;

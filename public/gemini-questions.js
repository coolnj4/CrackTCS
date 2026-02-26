const geminiQuestions = [
  // ==================== NQT / Advanced Coding ====================
  {
    id: 1,
    title: "Count Subsets with Given Sum",
    difficulty: "Medium",
    category: "NQT",
    tags: ["Dynamic Programming", "Arrays", "Advanced Coding"],
    description: `Count all the subsets of a given array with sum equal to a given sum.
NOTE: Since result can be very large, print the value modulo 10^9+7.

Input Format:
The first line of input contains an integer T denoting the number of test cases.
For each test case:
- The first line contains an integer N denoting the size of the array.
- The second line contains N space-separated integers denoting the array elements.
- The third line contains an integer S denoting the target sum.

Output Format:
For each test case, print the count of subsets with sum equal to S modulo 10^9+7.`,
    examples: [
      { input: "2\n3\n2 3 5\n5\n4\n6 8 10 5\n8", output: "1\n1" },
      { input: "1\n5\n1 2 3 4 5\n5", output: "3" }
    ],
    hiddenTests: [
      { input: "1\n1\n0\n0", output: "2" },
      { input: "1\n4\n1 1 1 1\n2", output: "6" },
      { input: "1\n3\n100 200 300\n700", output: "0" },
      { input: "1\n5\n1 2 3 4 5\n15", output: "1" },
      { input: "1\n3\n0 0 0\n0", output: "8" },
      { input: "1\n6\n2 4 6 8 10 12\n12", output: "4" }
    ],
    constraints: ["1<=T<=100", "1<=N<=10^3", "1<=a[i]<=10^3"],
    starterCode: {
      python: `MOD = 10**9 + 7
t = int(input())
for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split()))
    s = int(input())
    # Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const MOD = 1e9 + 7;
    let idx = 0;
    const t = parseInt(lines[idx++]);
    for (let i = 0; i < t; i++) {
      const n = parseInt(lines[idx++]);
      const arr = lines[idx++].split(' ').map(Number);
      const s = parseInt(lines[idx++]);
      // Write your code here

    }
  });`,
      c: `#include <stdio.h>
#define MOD 1000000007
int main() {
    int t;
    scanf("%d", &t);
    while (t--) {
        int n;
        scanf("%d", &n);
        int arr[n];
        for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
        int s;
        scanf("%d", &s);
        // Write your code here

    }
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int MOD = 1000000007;
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int s = sc.nextInt();
            // Write your code here

        }
    }
}`
    },
    solution: `MOD = 10**9 + 7
t = int(input())
for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split()))
    s = int(input())
    dp = [0] * (s + 1)
    dp[0] = 1
    for num in arr:
        for j in range(s, num - 1, -1):
            dp[j] = (dp[j] + dp[j - num]) % MOD
    print(dp[s])`
  },
  {
    id: 2,
    title: "Typewriter Backspace Challenge",
    difficulty: "Easy",
    category: "NQT",
    tags: ["Strings", "Stack"],
    description: `Alice challenged Bob to write the same word as his on a typewriter. Both are kids and are making some mistakes in typing and are making use of the '#' key on a typewriter to delete the last character printed on it.
An empty text remains empty even after backspaces.

Given the strings typed by Bob and Alice (including '#' for backspace), determine if the final text on both typewriters is the same.

Input Format:
The first line contains a string typed by Bob.
The second line contains a string typed by Alice.

Output Format:
Print "YES" if Alice is able to print the exact words as Bob, otherwise "NO".`,
    examples: [
      { input: "a#bc\nb#bc", output: "YES" },
      { input: "abc#\nabc", output: "NO" }
    ],
    hiddenTests: [
      { input: "a#b#c#\n###", output: "YES" },
      { input: "######\n", output: "YES" },
      { input: "ab##c\nc", output: "YES" },
      { input: "abc\nabc", output: "YES" },
      { input: "abc\ndef", output: "NO" },
      { input: "a#a#a#a\na#a#a#b", output: "NO" },
      { input: "xy#z\nxz", output: "YES" }
    ],
    constraints: ["String lengths bounded by standard memory limits"],
    starterCode: {
      python: `bob = input()
alice = input()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const bob = lines[0];
    const alice = lines[1];
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    char bob[100001], alice[100001];
    scanf("%s", bob);
    scanf("%s", alice);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String bob = sc.nextLine();
        String alice = sc.nextLine();
        // Write your code here

    }
}`
    },
    solution: `def process(s):
    stack = []
    for c in s:
        if c == '#':
            if stack:
                stack.pop()
        else:
            stack.append(c)
    return ''.join(stack)

bob = input()
alice = input()
print("YES" if process(bob) == process(alice) else "NO")`
  },
  {
    id: 3,
    title: "Valid Star-Hash String",
    difficulty: "Easy",
    category: "NQT",
    tags: ["Strings", "Counting", "Prime"],
    description: `Given a string S consisting of '*' and '#'. The task is to find the minimum number of '*' or '#' to make it a valid string. The string is considered valid if the number of '*' and '#' are equal.

The output should be:
- A positive integer if '*' count > '#' count
- A negative integer if '#' count > '*' count
- 0 if they are equal

Input Format:
A single string S containing '*' and '#'.

Output Format:
Print the result as described above.`,
    examples: [
      { input: "###***", output: "0" },
      { input: "##***", output: "1" },
      { input: "###**", output: "-1" }
    ],
    hiddenTests: [
      { input: "****", output: "4" },
      { input: "####", output: "-4" },
      { input: "*#", output: "0" },
      { input: "*", output: "1" },
      { input: "#", output: "-1" },
      { input: "**###*#*", output: "0" },
      { input: "***######", output: "-3" }
    ],
    constraints: ["Variable string length"],
    starterCode: {
      python: `s = input()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const s = lines[0];
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    char s[100001];
    scanf("%s", s);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        // Write your code here

    }
}`
    },
    solution: `s = input()
stars = s.count('*')
hashes = s.count('#')
print(stars - hashes)`
  },
  {
    id: 4,
    title: "Two Wheeler and Four Wheeler",
    difficulty: "Easy",
    category: "NQT",
    tags: ["Math", "Advanced Coding"],
    description: `An automobile company manufactures both two-wheelers (TW) and four-wheelers (FW). Given:
- Total number of vehicles (two-wheeler + four-wheeler) = V
- Total number of wheels = W

Find how many two-wheelers and four-wheelers need to be manufactured.

Print "INVALID INPUT" if:
- W is odd (wheels can't be fractional)
- V >= W (not possible since minimum 2 wheels per vehicle)
- The computed counts are negative
- W < 2*V (impossible — each vehicle needs at least 2 wheels)

Input Format:
First line: V (total vehicles)
Second line: W (total wheels)

Output Format:
Two space-separated integers: number of two-wheelers and four-wheelers.
Print "INVALID INPUT" if inputs don't meet the constraints.`,
    examples: [
      { input: "200\n540", output: "30 170" },
      { input: "5\n14", output: "3 2" }
    ],
    hiddenTests: [
      { input: "1\n2", output: "1 0" },
      { input: "1\n4", output: "0 1" },
      { input: "10\n40", output: "0 10" },
      { input: "10\n20", output: "10 0" },
      { input: "3\n5", output: "INVALID INPUT" },
      { input: "10\n10", output: "INVALID INPUT" },
      { input: "5\n50", output: "INVALID INPUT" },
      { input: "0\n0", output: "INVALID INPUT" },
      { input: "100\n300", output: "50 50" }
    ],
    constraints: ["2<=W", "W%2=0", "V<W"],
    starterCode: {
      python: `v = int(input())
w = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const v = parseInt(lines[0]);
    const w = parseInt(lines[1]);
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int v, w;
    scanf("%d", &v);
    scanf("%d", &w);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int v = sc.nextInt();
        int w = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `v = int(input())
w = int(input())
if w % 2 != 0 or v <= 0 or w < 2 * v or w > 4 * v:
    print("INVALID INPUT")
else:
    fw = (w - 2 * v) // 2
    tw = v - fw
    if tw < 0 or fw < 0:
        print("INVALID INPUT")
    else:
        print(tw, fw)`
  },
  {
    id: 5,
    title: "Print Primes in Range",
    difficulty: "Easy",
    category: "NQT",
    tags: ["Math", "Number Theory", "Primes"],
    description: `Print all prime numbers in the given range [L, R] (inclusive).

Input Format:
A single line containing two space-separated integers L and R.

Output Format:
Space-separated prime numbers in the range.`,
    examples: [
      { input: "10 20", output: "11 13 17 19" },
      { input: "1 10", output: "2 3 5 7" }
    ],
    hiddenTests: [
      { input: "2 2", output: "2" },
      { input: "1 1", output: "" },
      { input: "14 16", output: "" },
      { input: "90 100", output: "97" },
      { input: "1 50", output: "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47" },
      { input: "97 97", output: "97" },
      { input: "24 28", output: "" },
      { input: "29 31", output: "29 31" }
    ],
    constraints: ["1<=L<R<=10^5"],
    starterCode: {
      python: `l, r = map(int, input().split())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [l, r] = lines[0].split(' ').map(Number);
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int l, r;
    scanf("%d %d", &l, &r);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int l = sc.nextInt(), r = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `l, r = map(int, input().split())
def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0: return False
    return True
res = [str(x) for x in range(l, r+1) if is_prime(x)]
print(' '.join(res))`
  },
  {
    id: 6,
    title: "Max Sum of Two Non-Overlapping Subarrays",
    difficulty: "Hard",
    category: "NQT",
    tags: ["Arrays", "Sliding Window", "Dynamic Programming", "Advanced Coding"],
    description: `Given an array of integers and an integer K, find two non-overlapping subarrays each of length K with the maximum total sum.

Input Format:
First line: Two space-separated integers N and K.
Second line: N space-separated integers (the array).

Output Format:
A single integer denoting the maximum total sum.`,
    examples: [
      { input: "6 2\n1 2 3 4 5 6", output: "18" },
      { input: "8 3\n1 2 1 2 6 7 5 1", output: "23" }
    ],
    hiddenTests: [
      { input: "4 1\n1 2 3 4", output: "7" },
      { input: "4 2\n1 1 1 1", output: "4" },
      { input: "6 3\n1 1 1 1 1 1", output: "6" },
      { input: "5 2\n10 1 1 1 10", output: "22" },
      { input: "7 2\n3 8 1 3 2 1 8", output: "20" },
      { input: "10 3\n1 2 3 4 5 6 7 8 9 10", output: "42" }
    ],
    constraints: ["2*K <= N", "1 <= K <= N/2", "Standard array limits"],
    starterCode: {
      python: `n, k = map(int, input().split())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const [n, k] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int n, k;
    scanf("%d %d", &n, &k);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), k = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `n, k = map(int, input().split())
arr = list(map(int, input().split()))
prefix = [0] * (n + 1)
for i in range(n):
    prefix[i+1] = prefix[i] + arr[i]
def window_sum(l):
    return prefix[l+k] - prefix[l]
max_left = [0] * n
best = window_sum(0)
max_left[k-1] = best
for i in range(k, n):
    best = max(best, window_sum(i - k + 1))
    max_left[i] = best
ans = 0
for j in range(k, n - k + 1):
    ans = max(ans, max_left[j-1] + window_sum(j))
print(ans)`
  },
  {
    id: 7,
    title: "Words to Number Conversion",
    difficulty: "Medium",
    category: "NQT",
    tags: ["Strings", "Parsing", "Math"],
    description: `Convert a number from its word form to digit form.

For example:
- "one" → 1
- "thirty seven thousand" → 37000
- "ninety nine" → 99

Input Format:
First line: A positive integer T (number of test cases).
Next T lines: Each line contains a number in word form.

Output Format:
For each test case, print the number in digit form.`,
    examples: [
      { input: "3\none\nthirty seven thousand\nninety nine", output: "1\n37000\n99" },
      { input: "2\ntwenty one\nfive hundred twelve", output: "21\n512" }
    ],
    hiddenTests: [
      { input: "1\nzero", output: "0" },
      { input: "1\nforty nine thousand nine hundred ninety nine", output: "49999" },
      { input: "1\nten thousand", output: "10000" },
      { input: "1\none thousand one", output: "1001" },
      { input: "1\nnineteen", output: "19" },
      { input: "1\nfive thousand five hundred fifty five", output: "5555" },
      { input: "1\none hundred", output: "100" },
      { input: "1\ntwelve", output: "12" }
    ],
    constraints: ["0 <= output < 50000", "All numbers will be valid"],
    starterCode: {
      python: `t = int(input())
for _ in range(t):
    s = input()
    # Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    let idx = 0;
    const t = parseInt(lines[idx++]);
    for (let i = 0; i < t; i++) {
      const s = lines[idx++];
      // Write your code here

    }
  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    int t;
    scanf("%d\\n", &t);
    while (t--) {
        char s[256];
        fgets(s, sizeof(s), stdin);
        // Write your code here

    }
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine().trim());
        while (t-- > 0) {
            String s = sc.nextLine().trim();
            // Write your code here

        }
    }
}`
    },
    solution: `def words_to_num(s):
    ones = {'zero':0,'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9,
            'ten':10,'eleven':11,'twelve':12,'thirteen':13,'fourteen':14,'fifteen':15,'sixteen':16,
            'seventeen':17,'eighteen':18,'nineteen':19}
    tens = {'twenty':20,'thirty':30,'forty':40,'fifty':50,'sixty':60,'seventy':70,'eighty':80,'ninety':90}
    words = s.strip().lower().split()
    result = 0
    current = 0
    for w in words:
        if w in ones:
            current += ones[w]
        elif w in tens:
            current += tens[w]
        elif w == 'hundred':
            current *= 100
        elif w == 'thousand':
            current *= 1000
            result += current
            current = 0
    return result + current

t = int(input())
for _ in range(t):
    print(words_to_num(input()))`
  },

  // ==================== CodeVita ====================
  {
    id: 8,
    title: "Philaland Coin Denominations",
    difficulty: "Medium",
    category: "CodeVita",
    tags: ["Math", "Greedy", "Bit Manipulation"],
    description: `The problem solvers have found a new Island for coding and named it as Philaland. These smart people were given a task to make purchase of items at the Island easier by distributing various coins with different values.

The condition is that using the available denominations, one should be able to pay for any item of any price (from 1 to N) using at most one coin of each denomination.

Your task is to help find the minimum number of denominations required for any arbitrary max price N in Philaland.

Input Format:
First line: An integer T denoting the number of test cases.
Next T lines: Each contains an integer N denoting the maximum price.

Output Format:
For each test case, print the minimum number of denominations of coins required.`,
    examples: [
      { input: "2\n10\n5", output: "4\n3" },
      { input: "1\n1", output: "1" }
    ],
    hiddenTests: [
      { input: "1\n7", output: "3" },
      { input: "1\n15", output: "4" },
      { input: "1\n16", output: "5" },
      { input: "1\n31", output: "5" },
      { input: "1\n32", output: "6" },
      { input: "1\n1000", output: "10" },
      { input: "1\n5000", output: "13" },
      { input: "1\n3", output: "2" },
      { input: "1\n255", output: "8" }
    ],
    constraints: ["1<=T<=100", "1<=N<=5000"],
    starterCode: {
      python: `t = int(input())
for _ in range(t):
    n = int(input())
    # Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    let idx = 0;
    const t = parseInt(lines[idx++]);
    for (let i = 0; i < t; i++) {
      const n = parseInt(lines[idx++]);
      // Write your code here

    }
  });`,
      c: `#include <stdio.h>
int main() {
    int t;
    scanf("%d", &t);
    while (t--) {
        int n;
        scanf("%d", &n);
        // Write your code here

    }
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            // Write your code here

        }
    }
}`
    },
    solution: `import math
t = int(input())
for _ in range(t):
    n = int(input())
    # With denominations as powers of 2 (1,2,4,8,...), we can make any sum from 1 to 2^k-1
    # Minimum coins = ceil(log2(n+1))
    print(math.ceil(math.log2(n + 1)))`
  },
  {
    id: 9,
    title: "Dole Out Cadbury",
    difficulty: "Medium",
    category: "CodeVita",
    tags: ["Math", "Loops", "Simulation"],
    description: `A teacher has a set of chocolates of varying sizes. The first child in the queue gets one chocolate of any size between P×R and Q×S dimensions (length × width). After that child takes a chocolate, the remaining chocolate is cut into 5×5 pieces and the next child in the queue gets one piece. This continues until no more 5×5 pieces can be cut.

Actually: For every possible chocolate of length L (P to Q) and width W (R to S), we count:
- 1 child gets the original chocolate
- Then remaining area is divided into 5×5 pieces: floor((L*W) / 25) children get those pieces
- Wait — re-reading: "first child gets the full bar, remaining 5x5 to next in queue"
  
Total children = number of valid chocolates × (1 for the first child + floor of pieces cut from that bar).

Actually, the simpler interpretation: for each bar of dimension L×W, the number of children = 1 + floor((L×W)/(5×5)) ... but actually let's re-read: "first child and then remaining 5X5 to next in queue... Print total number of children who will get chocolate."

Simplest interpretation: For each chocolate bar of length L (P to Q) and width W (R to S), count the total number of children that can be served from it. The first child gets one piece, and then the remaining area is cut into 5×5 squares. Total children from one bar = floor(L*W / 25). Sum across all bars.

No — "first child" gets a bar. Then "remaining 5×5" pieces go to next children. This means total children for one bar = 1 + floor((L*W - 1) / 25)? That doesn't make sense either.

Let me use the simplest interpretation: Total children = sum of floor(L*W / 25) for all L in [P,Q] and W in [R,S]. If L*W < 25, that bar gives 0 children (or 1?).

Actually the most natural reading: each combination of L (from P to Q) and W (from R to S) represents a chocolate. For each, the number of 5x5 pieces = floor(L*W / 25). Print total count of children = sum of all these pieces.

Input Format:
First line: P (minimum length)
Second line: Q (maximum length)
Third line: R (minimum width)
Fourth line: S (maximum width)

Output Format:
Print total number of children who will get chocolate.`,
    examples: [
      { input: "5\n7\n3\n4", output: "4" },
      { input: "10\n10\n10\n10", output: "4" }
    ],
    hiddenTests: [
      { input: "5\n5\n5\n5", output: "1" },
      { input: "1\n4\n1\n4", output: "0" },
      { input: "25\n25\n1\n1", output: "1" },
      { input: "5\n10\n5\n10", output: "36" },
      { input: "1\n1\n1\n1", output: "0" },
      { input: "10\n15\n10\n15", output: "114" }
    ],
    constraints: ["0<P<Q<1501", "0<R<S<1501"],
    starterCode: {
      python: `p = int(input())
q = int(input())
r = int(input())
s = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const p = parseInt(lines[0]);
    const q = parseInt(lines[1]);
    const r = parseInt(lines[2]);
    const s = parseInt(lines[3]);
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int p, q, r, s;
    scanf("%d", &p);
    scanf("%d", &q);
    scanf("%d", &r);
    scanf("%d", &s);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int p = sc.nextInt();
        int q = sc.nextInt();
        int r = sc.nextInt();
        int s = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `p = int(input())
q = int(input())
r = int(input())
s = int(input())
total = 0
for l in range(p, q + 1):
    for w in range(r, s + 1):
        total += (l * w) // 25
print(total)`
  },
  {
    id: 10,
    title: "Submission Queue Maximum Size",
    difficulty: "Medium",
    category: "CodeVita",
    tags: ["Queue", "Sliding Window", "Two Pointers"],
    description: `A submission queue manages coding submissions. A submission is removed from the queue if a new submission is made at time 't' and a previous submission exists with timestamp <= t - 5000 (i.e., 5000 or more seconds before).

When a new submission at time t arrives:
1. Remove all submissions from the front of the queue whose timestamp <= t - 5000.
2. Add the new submission to the queue.
3. Record the queue size.

Determine the maximum size the submission queue reaches at any point.

Input Format:
First line: An integer N representing the number of submissions.
Second line: N space-separated integers representing the timestamps (in non-decreasing order).

Output Format:
A single integer representing the maximum queue size found.`,
    examples: [
      { input: "5\n1 2 3 4 5", output: "5" },
      { input: "6\n1 1000 2000 3000 4000 6000", output: "6" }
    ],
    hiddenTests: [
      { input: "1\n100", output: "1" },
      { input: "3\n1 5001 10001", output: "1" },
      { input: "6\n1 2 3 5001 5002 5003", output: "5" },
      { input: "4\n1 2 3 4", output: "4" },
      { input: "5\n1000 2000 3000 4000 5999", output: "5" },
      { input: "5\n1000 2000 3000 4000 6000", output: "5" },
      { input: "7\n1 2 3 4 5000 5001 5002", output: "6" }
    ],
    constraints: ["1 <= N <= 10^5", "1 <= arr[i] <= 10^8"],
    starterCode: {
      python: `n = int(input())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `from collections import deque
n = int(input())
arr = list(map(int, input().split()))
q = deque()
max_size = 0
for t in arr:
    while q and q[0] <= t - 5000:
        q.popleft()
    q.append(t)
    max_size = max(max_size, len(q))
print(max_size)`
  },
  {
    id: 11,
    title: "Maximum Moons in a Solar System",
    difficulty: "Easy",
    category: "CodeVita",
    tags: ["Arrays", "Matrix", "Greedy"],
    description: `A galaxy has N suns, each with M planets. Each planet has a certain number of moons. A solar system consists of one sun and all its planets.

Calculate the total number of moons for each solar system and output the maximum total found in the galaxy.

Input Format:
First line: Two space-separated integers N (number of suns) and M (number of planets per sun).
Next N lines: M space-separated integers representing the moons of each planet.

Output Format:
A single integer denoting the maximum total number of moons in any single solar system.`,
    examples: [
      { input: "3 3\n1 2 3\n4 5 6\n7 8 9", output: "24" },
      { input: "2 2\n10 20\n5 15", output: "30" }
    ],
    hiddenTests: [
      { input: "1 1\n42", output: "42" },
      { input: "1 5\n1 2 3 4 5", output: "15" },
      { input: "5 1\n10\n20\n30\n40\n50", output: "50" },
      { input: "3 4\n0 0 0 0\n1 1 1 1\n0 0 0 1", output: "4" },
      { input: "2 3\n100 200 300\n999 1 1", output: "1001" }
    ],
    constraints: ["1 <= N <= 500", "1 <= M <= 500", "galaxy[i][j] <= 10^4"],
    starterCode: {
      python: `n, m = map(int, input().split())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const [n, m] = lines[0].split(' ').map(Number);
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int n, m;
    scanf("%d %d", &n, &m);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), m = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `n, m = map(int, input().split())
max_moons = 0
for i in range(n):
    row = list(map(int, input().split()))
    max_moons = max(max_moons, sum(row))
print(max_moons)`
  },
  {
    id: 12,
    title: "Toy Product IDs and Sizes Recovery",
    difficulty: "Easy",
    category: "CodeVita",
    tags: ["Arrays", "Rearrangement"],
    description: `A manager accidentally combined two lists of length N (Product IDs and Sizes) into a single list of 2N elements. All IDs appear before all sizes in the merged list. The i-th ID corresponds to the i-th size.

Recover the data into a new list of 2N elements where each product ID is immediately followed by its corresponding size.

Input Format:
First line: An integer N representing the number of toys.
Second line: 2N space-separated integers (the merged list of IDs followed by sizes).

Output Format:
2N space-separated integers where the i-th ID is followed by the i-th size.`,
    examples: [
      { input: "3\n1 2 3 10 20 30", output: "1 10 2 20 3 30" },
      { input: "2\n5 6 50 60", output: "5 50 6 60" }
    ],
    hiddenTests: [
      { input: "1\n42 99", output: "42 99" },
      { input: "4\n1 2 3 4 5 6 7 8", output: "1 5 2 6 3 7 4 8" },
      { input: "5\n10 20 30 40 50 1 2 3 4 5", output: "10 1 20 2 30 3 40 4 50 5" },
      { input: "3\n99 88 77 11 22 33", output: "99 11 88 22 77 33" }
    ],
    constraints: ["1 <= N <= 10^5", "1 <= a_i, b_i <= 100"],
    starterCode: {
      python: `n = int(input())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    int arr[2*n];
    for (int i = 0; i < 2*n; i++) scanf("%d", &arr[i]);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[2*n];
        for (int i = 0; i < 2*n; i++) arr[i] = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
ids = arr[:n]
sizes = arr[n:]
result = []
for i in range(n):
    result.append(str(ids[i]))
    result.append(str(sizes[i]))
print(' '.join(result))`
  },
  {
    id: 13,
    title: "Minimum Movements to Sit Together",
    difficulty: "Hard",
    category: "CodeVita",
    tags: ["Arrays", "Math", "Greedy"],
    description: `Given N seats and their occupied/empty status (O/E), find the minimum number of movements required to make all occupied people sit together, and the number of ways to achieve this minimum.

A "movement" is one person moving one seat to the left or right (to an empty seat).

Input Format:
First line: An integer N depicting the number of seats.
Second line: N characters each of which are either "O" (occupied) or "E" (empty).

Output Format:
Print the minimum number of movements followed by a space and the number of ways in which all people can be made to sit together with the minimum movements.`,
    examples: [
      { input: "5\nOEOEO", output: "2 2" },
      { input: "3\nOOO", output: "0 1" }
    ],
    hiddenTests: [
      { input: "1\nO", output: "0 1" },
      { input: "5\nEEEEE", output: "0 1" },
      { input: "4\nOEEO", output: "1 2" },
      { input: "6\nOEEEEO", output: "4 1" },
      { input: "7\nOEOEOEE", output: "2 1" },
      { input: "5\nOOOEE", output: "0 1" },
      { input: "6\nEOOOOE", output: "0 1" }
    ],
    constraints: ["0 < N <= 100000"],
    starterCode: {
      python: `n = int(input())
seats = input().strip()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const seats = lines[1];
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    int n;
    scanf("%d", &n);
    char seats[100001];
    scanf("%s", seats);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String seats = sc.next();
        // Write your code here

    }
}`
    },
    solution: `n = int(input())
seats = input().strip()
positions = [i for i, c in enumerate(seats) if c == 'O']
k = len(positions)
if k <= 1:
    print("0 1")
else:
    # Use median-based approach
    # Try all windows of k consecutive seats
    min_moves = float('inf')
    ways = 0
    for start in range(n - k + 1):
        target = list(range(start, start + k))
        moves = sum(abs(positions[i] - target[i]) for i in range(k))
        if moves < min_moves:
            min_moves = moves
            ways = 1
        elif moves == min_moves:
            ways += 1
    print(min_moves, ways)`
  },
  {
    id: 14,
    title: "Smallest Missing Positive Integer",
    difficulty: "Easy",
    category: "CodeVita",
    tags: ["Arrays", "Hashing"],
    description: `Find the smallest missing positive integer from an unsorted array.

Input Format:
First line: N (size of array).
Second line: N space-separated array elements (can be negative, zero or positive).

Output Format:
The smallest missing positive integer.`,
    examples: [
      { input: "5\n1 2 3 4 5", output: "6" },
      { input: "5\n3 4 -1 1 0", output: "2" }
    ],
    hiddenTests: [
      { input: "1\n1", output: "2" },
      { input: "1\n2", output: "1" },
      { input: "3\n-1 -2 -3", output: "1" },
      { input: "6\n1 1 1 1 1 1", output: "2" },
      { input: "5\n2 3 4 5 6", output: "1" },
      { input: "7\n1 2 3 5 6 7 8", output: "4" },
      { input: "3\n0 0 0", output: "1" },
      { input: "4\n7 8 9 11", output: "1" }
    ],
    constraints: ["Standard array limits"],
    starterCode: {
      python: `n = int(input())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
s = set(arr)
i = 1
while i in s:
    i += 1
print(i)`
  },

  // ==================== Digital ====================
  {
    id: 15,
    title: "Nearest Larger Permutation Number",
    difficulty: "Hard",
    category: "Digital",
    tags: ["Permutation", "Sorting", "Math"],
    description: `Given two numbers a and b, find the smallest number greater than b that can be formed by rearranging the digits of a. If it is not possible to form such a number, print -1.

Input Format:
Two numbers a and b separated by a space.

Output Format:
A single number representing the smallest permutation of a that is greater than b, or -1.`,
    examples: [
      { input: "459 500", output: "549" },
      { input: "123 321", output: "-1" }
    ],
    hiddenTests: [
      { input: "123 100", output: "123" },
      { input: "111 111", output: "-1" },
      { input: "321 100", output: "123" },
      { input: "999 998", output: "999" },
      { input: "12 21", output: "-1" },
      { input: "1000000 999999", output: "1000000" },
      { input: "54321 12345", output: "12345" },
      { input: "100 99", output: "100" }
    ],
    constraints: ["1 <= a, b <= 10,000,000"],
    starterCode: {
      python: `a, b = input().split()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const [a, b] = lines[0].split(' ');
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int main() {
    char a[20], b[20];
    scanf("%s %s", a, b);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next(), b = sc.next();
        // Write your code here

    }
}`
    },
    solution: `from itertools import permutations
a, b = input().split()
b_num = int(b)
digits = sorted(a)
# Generate permutations in sorted order and find first > b
perms = sorted(set(int(''.join(p)) for p in permutations(digits)))
result = -1
for p in perms:
    if p > b_num:
        result = p
        break
print(result)`
  },
  {
    id: 16,
    title: "Oddly Even",
    difficulty: "Easy",
    category: "Digital",
    tags: ["Math", "Strings"],
    description: `Find the difference between the sum of digits located at odd positions and the sum of digits located at even positions (1-indexed from left).

Output the absolute difference.

Input Format:
A single number (can be up to 100 digits long).

Output Format:
A single integer representing the absolute difference.`,
    examples: [
      { input: "4567", output: "2" },
      { input: "12345", output: "3" }
    ],
    hiddenTests: [
      { input: "0", output: "0" },
      { input: "5", output: "5" },
      { input: "11", output: "0" },
      { input: "19", output: "8" },
      { input: "99999", output: "9" },
      { input: "123456789", output: "5" },
      { input: "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", output: "1" }
    ],
    constraints: ["Number can be up to 100 digits long"],
    starterCode: {
      python: `s = input()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const s = lines[0];
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int main() {
    char s[101];
    scanf("%s", s);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().trim();
        // Write your code here

    }
}`
    },
    solution: `s = input().strip()
odd_sum = sum(int(s[i]) for i in range(0, len(s), 2))
even_sum = sum(int(s[i]) for i in range(1, len(s), 2))
print(abs(odd_sum - even_sum))`
  },
  {
    id: 17,
    title: "Busiest Parking Row",
    difficulty: "Easy",
    category: "Digital",
    tags: ["Matrix", "Arrays", "Advanced Coding"],
    description: `A parking lot in a mall consists of a matrix with R rows and C columns. Each space is represented as either empty (0) or full (1). Find the index (0-based) of the row that contains the highest number of full parking spaces. If there is a tie, return the row with the smallest index.

Input Format:
First line: R and C (rows and columns).
Next R lines: C space-separated 0s and 1s.

Output Format:
Integer index of the row (0-based).`,
    examples: [
      { input: "3 3\n0 1 0\n1 1 0\n1 1 1", output: "2" },
      { input: "2 4\n1 0 1 0\n0 1 0 1", output: "0" }
    ],
    hiddenTests: [
      { input: "1 1\n1", output: "0" },
      { input: "1 1\n0", output: "0" },
      { input: "3 3\n1 1 1\n1 1 1\n1 1 1", output: "0" },
      { input: "4 2\n0 0\n1 0\n0 0\n0 1", output: "1" },
      { input: "2 5\n0 0 0 0 0\n1 1 1 1 1", output: "1" },
      { input: "3 3\n0 0 0\n0 0 0\n0 0 0", output: "0" }
    ],
    constraints: ["Matrix elements must strictly be only 0 or 1"],
    starterCode: {
      python: `r, c = map(int, input().split())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const [r, c] = lines[0].split(' ').map(Number);
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int r, c;
    scanf("%d %d", &r, &c);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int r = sc.nextInt(), c = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `r, c = map(int, input().split())
max_count = -1
max_row = 0
for i in range(r):
    row = list(map(int, input().split()))
    count = sum(row)
    if count > max_count:
        max_count = count
        max_row = i
print(max_row)`
  },
  {
    id: 18,
    title: "Odd Balloon Color",
    difficulty: "Easy",
    category: "Digital",
    tags: ["Arrays", "Hashing", "Advanced Coding"],
    description: `At a fun fair, a vendor sells balloons in N different colors (represented as characters in an array B). Find the color that appears an odd number of times in the collection. There is guaranteed to be exactly one such color.

Input Format:
First line: N (number of balloons).
Second line: N space-separated characters representing balloon colors.

Output Format:
A single character representing the balloon color that appears an odd number of times.`,
    examples: [
      { input: "7\nr g b b g y y", output: "r" },
      { input: "5\na a b b c", output: "c" }
    ],
    hiddenTests: [
      { input: "1\nz", output: "z" },
      { input: "3\nx x y", output: "y" },
      { input: "9\na b c a b c a b a", output: "b" },
      { input: "5\nA A B B A", output: "A" },
      { input: "3\nm m m", output: "m" },
      { input: "7\np q p q p q p", output: "p" }
    ],
    constraints: ["Colors can be uppercase or lowercase", "Exactly one odd-count color exists"],
    starterCode: {
      python: `n = int(input())
b = input().split()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const b = lines[1].split(' ');
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] b = new String[n];
        for (int i = 0; i < n; i++) b[i] = sc.next();
        // Write your code here

    }
}`
    },
    solution: `n = int(input())
b = input().split()
from collections import Counter
cnt = Counter(b)
for color, count in cnt.items():
    if count % 2 == 1:
        print(color)
        break`
  },
  {
    id: 19,
    title: "Sweet Seventeen (Base 17 to Decimal)",
    difficulty: "Easy",
    category: "Digital",
    tags: ["Math", "Number Systems"],
    description: `Given a number in base 17 (where digits 10-16 are represented as A-G), convert it to its decimal value.

Digit mapping: 0-9 as usual, A=10, B=11, C=12, D=13, E=14, F=15, G=16.

Input Format:
A single string representing the base-17 number (maximum of four digits).

Output Format:
A single integer (the decimal value).`,
    examples: [
      { input: "23GF", output: "12244" },
      { input: "10", output: "17" }
    ],
    hiddenTests: [
      { input: "0", output: "0" },
      { input: "1", output: "1" },
      { input: "A", output: "10" },
      { input: "G", output: "16" },
      { input: "100", output: "289" },
      { input: "GGGG", output: "83520" },
      { input: "1000", output: "4913" },
      { input: "11", output: "18" }
    ],
    constraints: ["Maximum of four digits"],
    starterCode: {
      python: `s = input().strip()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const s = lines[0];
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    char s[10];
    scanf("%s", s);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().trim();
        // Write your code here

    }
}`
    },
    solution: `s = input().strip()
result = 0
for c in s:
    if c.isdigit():
        val = int(c)
    else:
        val = ord(c.upper()) - ord('A') + 10
    result = result * 17 + val
print(result)`
  },
  {
    id: 20,
    title: "Keyword or Not",
    difficulty: "Easy",
    category: "Digital",
    tags: ["Strings", "Lookup"],
    description: `One programming language has the following keywords that cannot be used as identifiers: break, case, continue, default, defer, else, for, func, goto, if, map, range, return, struct, type, var.

Write a program to check if a given word is a keyword or not.

Input Format:
A single string representing the word to check.

Output Format:
Print "[word] is a keyword" or "[word] is not a keyword".`,
    examples: [
      { input: "defer", output: "defer is a keyword" },
      { input: "hello", output: "hello is not a keyword" }
    ],
    hiddenTests: [
      { input: "break", output: "break is a keyword" },
      { input: "return", output: "return is a keyword" },
      { input: "var", output: "var is a keyword" },
      { input: "map", output: "map is a keyword" },
      { input: "main", output: "main is not a keyword" },
      { input: "int", output: "int is not a keyword" },
      { input: "IF", output: "IF is not a keyword" },
      { input: "struct", output: "struct is a keyword" }
    ],
    constraints: ["Input word length bounded by memory"],
    starterCode: {
      python: `word = input().strip()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const word = lines[0];
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    char word[256];
    scanf("%s", word);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word = sc.nextLine().trim();
        // Write your code here

    }
}`
    },
    solution: `word = input().strip()
keywords = {"break","case","continue","default","defer","else","for","func","goto","if","map","range","return","struct","type","var"}
if word in keywords:
    print(f"{word} is a keyword")
else:
    print(f"{word} is not a keyword")`
  },
  {
    id: 21,
    title: "Nth Term of Mixed Series",
    difficulty: "Medium",
    category: "Digital",
    tags: ["Math", "Series"],
    description: `Find the Nth term of the series: 1, 1, 2, 3, 4, 9, 8, 27, 16, 81, 32, 243, 64, 729, 128, 2187, ...

The pattern is:
- Odd-positioned terms (1st, 3rd, 5th, ...): powers of 2 → 2^0, 2^1, 2^2, 2^3, ...
- Even-positioned terms (2nd, 4th, 6th, ...): powers of 3 → 3^0, 3^1, 3^2, 3^3, ...

Input Format:
A positive integer N.

Output Format:
The calculated Nth term.`,
    examples: [
      { input: "16", output: "2187" },
      { input: "1", output: "1" }
    ],
    hiddenTests: [
      { input: "2", output: "1" },
      { input: "3", output: "2" },
      { input: "4", output: "3" },
      { input: "5", output: "4" },
      { input: "6", output: "9" },
      { input: "10", output: "81" },
      { input: "15", output: "128" },
      { input: "7", output: "8" },
      { input: "20", output: "19683" }
    ],
    constraints: ["N <= 30"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const n = parseInt(lines[0]);
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <math.h>
int main() {
    int n;
    scanf("%d", &n);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `n = int(input())
if n % 2 == 1:
    # Odd position: 2^((n-1)//2)
    print(2 ** ((n - 1) // 2))
else:
    # Even position: 3^((n-2)//2)
    print(3 ** ((n - 2) // 2))`
  },
  {
    id: 22,
    title: "Word Transformer",
    difficulty: "Easy",
    category: "Digital",
    tags: ["Strings"],
    description: `Given three words, apply the following transformations:
- First Word: Replace all vowels (a, e, i, o, u — case-insensitive) with the '*' character.
- Second Word: Replace all consonants with the '@' character.
- Third Word: Convert all characters to upper case.

Concatenate and print the three transformed words (no separator).

Input Format:
Three words on separate lines via STDIN.

Output Format:
The concatenated transformed string.`,
    examples: [
      { input: "how\nare\nyou", output: "h*w@@@YOU" },
      { input: "hello\nworld\ntest", output: "h*ll**o@@TEST" }
    ],
    hiddenTests: [
      { input: "aeiou\naeiou\naeiou", output: "*****aeiouAEIOU" },
      { input: "bcd\nbcd\nbcd", output: "bcd@@@BCD" },
      { input: "a\nb\nc", output: "*@C" },
      { input: "Apple\nOrange\nBanana", output: "*ppl*O@a@@eBanana" },
      { input: "xyz\naaa\nHi", output: "xyz@@@HI" }
    ],
    constraints: ["Each word length <= 5"],
    starterCode: {
      python: `w1 = input()
w2 = input()
w3 = input()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const w1 = lines[0];
    const w2 = lines[1];
    const w3 = lines[2];
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <string.h>
#include <ctype.h>
int main() {
    char w1[10], w2[10], w3[10];
    scanf("%s", w1);
    scanf("%s", w2);
    scanf("%s", w3);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String w1 = sc.nextLine();
        String w2 = sc.nextLine();
        String w3 = sc.nextLine();
        // Write your code here

    }
}`
    },
    solution: `w1 = input()
w2 = input()
w3 = input()
vowels = 'aeiouAEIOU'
r1 = ''.join('*' if c in vowels else c for c in w1)
r2 = ''.join(c if c in vowels else '@' for c in w2)
r3 = w3.upper()
print(r1 + r2 + r3)`
  },
  {
    id: 23,
    title: "Fibonacci-Prime Mixed Series",
    difficulty: "Medium",
    category: "Digital",
    tags: ["Math", "Fibonacci", "Primes"],
    description: `Find the Nth term of a series that is a mixture of two sub-series:
- Odd-positioned terms (1st, 3rd, 5th, ...) form the Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, ...
- Even-positioned terms (2nd, 4th, 6th, ...) are prime numbers in ascending order: 2, 3, 5, 7, 11, 13, ...

The series looks like: 0, 2, 1, 3, 1, 5, 2, 7, 3, 11, 5, 13, 8, 17, ...

Input Format:
A single positive integer N.

Output Format:
The Nth term of the series.`,
    examples: [
      { input: "14", output: "17" },
      { input: "1", output: "0" }
    ],
    hiddenTests: [
      { input: "2", output: "2" },
      { input: "3", output: "1" },
      { input: "4", output: "3" },
      { input: "5", output: "1" },
      { input: "6", output: "5" },
      { input: "7", output: "2" },
      { input: "8", output: "7" },
      { input: "10", output: "11" },
      { input: "9", output: "3" }
    ],
    constraints: ["Nth term <= 99999"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const n = parseInt(lines[0]);
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `def get_primes(count):
    primes = []
    num = 2
    while len(primes) < count:
        is_prime = True
        for i in range(2, int(num**0.5)+1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(num)
        num += 1
    return primes

def get_fibs(count):
    fibs = []
    a, b = 0, 1
    for _ in range(count):
        fibs.append(a)
        a, b = b, a + b
    return fibs

n = int(input())
if n % 2 == 1:
    idx = (n - 1) // 2
    print(get_fibs(idx + 1)[idx])
else:
    idx = (n - 2) // 2
    print(get_primes(idx + 1)[idx])`
  },

  // ==================== TAG ====================
  {
    id: 24,
    title: "Unique Permutations with Character Counts",
    difficulty: "Hard",
    category: "TAG",
    tags: ["Permutations", "Backtracking", "Strings"],
    description: `Generate all unique permutations of length N using exactly: a number of 'A's, b number of 'B's, c number of 'C's (where a + b + c = N).

Print each unique string on a separate line in lexicographic order.

Input Format:
First line: N (string length).
Second line: a b c (count of each character A, B, C).

Output Format:
Unique strings printed on separate lines in lexicographic order.`,
    examples: [
      { input: "3\n1 1 1", output: "ABC\nACB\nBAC\nBCA\nCAB\nCBA" },
      { input: "2\n2 0 0", output: "AA" }
    ],
    hiddenTests: [
      { input: "1\n1 0 0", output: "A" },
      { input: "1\n0 1 0", output: "B" },
      { input: "1\n0 0 1", output: "C" },
      { input: "3\n3 0 0", output: "AAA" },
      { input: "3\n2 1 0", output: "AAB\nABA\nBAA" },
      { input: "4\n2 1 1", output: "AABC\nAACA\nAACB\nABAC\nABCA\nACAB\nACBA\nBAAC\nBACA\nBCAA\nCAAB\nCABA\nCBAA" },
      { input: "2\n1 1 0", output: "AB\nBA" }
    ],
    constraints: ["Bounded limits for permutations", "a + b + c = N"],
    starterCode: {
      python: `n = int(input())
a, b, c = map(int, input().split())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const [a, b, c] = lines[1].split(' ').map(Number);
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    int n, a, b, c;
    scanf("%d", &n);
    scanf("%d %d %d", &a, &b, &c);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `from itertools import permutations
n = int(input())
a, b, c = map(int, input().split())
s = 'A' * a + 'B' * b + 'C' * c
result = sorted(set(''.join(p) for p in permutations(s)))
for r in result:
    print(r)`
  },
  {
    id: 25,
    title: "Mike's Startup Party (Table Arrangement)",
    difficulty: "Hard",
    category: "Ninja",
    tags: ["Sorting", "Greedy", "Dynamic Programming"],
    description: `Mike has invited N employees, indexed from 1 to N. Every employee's salary is known. Mike needs to arrange tables to accommodate all employees while minimizing the 'inefficiency of arrangement.'

The inefficiency of a table is defined as the difference between the maximum and minimum salary at that table. Each table can have at most K+1 people. The total inefficiency is the sum of inefficiencies across all tables.

Find the smallest possible value for the total inefficiency.

Input Format:
First line: N (number of employees) and K.
Second line: N space-separated integers representing salaries.

Output Format:
Smallest possible value for the inefficiency.`,
    examples: [
      { input: "5 1\n5 1 3 3 3", output: "4" },
      { input: "4 2\n1 2 3 10", output: "2" }
    ],
    hiddenTests: [
      { input: "1 1\n100", output: "0" },
      { input: "2 1\n5 10", output: "5" },
      { input: "3 1\n1 2 3", output: "2" },
      { input: "6 2\n1 2 3 4 5 6", output: "4" },
      { input: "4 3\n1 10 20 30", output: "29" },
      { input: "5 1\n1 1 1 1 1", output: "0" },
      { input: "3 2\n10 20 30", output: "20" }
    ],
    constraints: ["Constraints bound by optimal table arrangements"],
    starterCode: {
      python: `line1 = input().split()
n, k = int(line1[0]), int(line1[1])
salaries = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const [n, k] = lines[0].split(' ').map(Number);
    const salaries = lines[1].split(' ').map(Number);
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a, const void *b) { return *(int*)a - *(int*)b; }
int main() {
    int n, k;
    scanf("%d %d", &n, &k);
    int salaries[n];
    for (int i = 0; i < n; i++) scanf("%d", &salaries[i]);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), k = sc.nextInt();
        int[] salaries = new int[n];
        for (int i = 0; i < n; i++) salaries[i] = sc.nextInt();
        // Write your code here

    }
}`
    },
    solution: `line1 = input().split()
n, k = int(line1[0]), int(line1[1])
salaries = list(map(int, input().split()))
salaries.sort()
group_size = k + 1
# DP approach: sort salaries, group consecutive elements
# dp[i] = min inefficiency to seat first i employees
INF = float('inf')
dp = [INF] * (n + 1)
dp[0] = 0
for i in range(1, n + 1):
    for sz in range(1, group_size + 1):
        if i - sz >= 0:
            cost = salaries[i-1] - salaries[i-sz]
            dp[i] = min(dp[i], dp[i-sz] + cost)
print(dp[n])`
  },
  {
    id: 26,
    title: "Max A-Count Between Two Sets",
    difficulty: "Easy",
    category: "NQT",
    tags: ["Strings", "Counting", "Ninja"],
    description: `Given N sets of strings containing only characters 'a' and 'b'. Among all the sets, find the one that has the maximum number of 'a's. Output the count of 'a's in that set.

Input Format:
First line: N (number of sets).
Next N lines: each line is a string containing only 'a' and 'b'.

Output Format:
A positive integer — the maximum count of 'a's found in any single set.`,
    examples: [
      { input: "2\nabbbb\naabbb", output: "2" },
      { input: "3\naaa\nbb\nab", output: "3" }
    ],
    hiddenTests: [
      { input: "1\na", output: "1" },
      { input: "1\nb", output: "0" },
      { input: "2\naaaa\nbbbb", output: "4" },
      { input: "3\naabb\nbbaa\nabab", output: "2" },
      { input: "5\nb\nb\nb\nb\na", output: "1" },
      { input: "2\naaaaaaaa\nbbbbbbbbb", output: "8" }
    ],
    constraints: ["1<=L<=10", "1<=N<=50"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const n = parseInt(lines[0]);
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    int n;
    scanf("%d", &n);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine().trim());
        // Write your code here

    }
}`
    },
    solution: `n = int(input())
max_a = 0
for _ in range(n):
    s = input().strip()
    max_a = max(max_a, s.count('a'))
print(max_a)`
  },
  {
    id: 27,
    title: "Remove Brackets from Expression",
    difficulty: "Medium",
    category: "TAG",
    tags: ["Strings", "Stack", "Expression Parsing"],
    description: `Remove brackets from an algebraic expression while correctly handling signs. When a minus sign precedes a bracket, the signs of all terms inside that bracket are flipped.

For example:
- "a-(b+c)" → "a-b-c"
- "a-(b-c)" → "a-b+c"
- "a+(b+c)" → "a+b+c"

Input Format:
A string representing the algebraic expression.

Output Format:
A string without brackets.`,
    examples: [
      { input: "a-(b+c)", output: "a-b-c" },
      { input: "a+(b-c)", output: "a+b-c" }
    ],
    hiddenTests: [
      { input: "a+b", output: "a+b" },
      { input: "(a+b)", output: "a+b" },
      { input: "a-(b-(c+d))", output: "a-b+c+d" },
      { input: "a+(b+(c+d))", output: "a+b+c+d" },
      { input: "a-(b+c-d)", output: "a-b-c+d" },
      { input: "-(a+b)", output: "-a-b" },
      { input: "a-(-b+c)", output: "a+b-c" }
    ],
    constraints: ["Bracket pairings expected"],
    starterCode: {
      python: `expr = input().strip()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const expr = lines[0];
    // Write your code here

  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    char expr[1000];
    scanf("%s", expr);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String expr = sc.nextLine().trim();
        // Write your code here

    }
}`
    },
    solution: `expr = input().strip()
result = []
sign_stack = [1]
i = 0
n = len(expr)
while i < n:
    if expr[i] == '(':
        # Determine sign before bracket
        if i > 0 and expr[i-1] == '-':
            sign_stack.append(-sign_stack[-1])
        else:
            sign_stack.append(sign_stack[-1])
        i += 1
    elif expr[i] == ')':
        sign_stack.pop()
        i += 1
    elif expr[i] in '+-':
        if sign_stack[-1] == -1:
            result.append('+' if expr[i] == '-' else '-')
        else:
            result.append(expr[i])
        i += 1
    else:
        result.append(expr[i])
        i += 1
# Clean leading +
res = ''.join(result)
if res.startswith('+'):
    res = res[1:]
print(res)`
  },
  {
    id: 28,
    title: "Orchard Apple Trees",
    difficulty: "Hard",
    category: "CodeVita",
    tags: ["Geometry", "Math", "Pick's Theorem"],
    description: `A number of apple trees are in a large orchard. The orchard boundaries form a simple polygon shape that may be non-convex. All trees are located at integer coordinate points where both x and y coordinates are even.

Given the boundary corners of the orchard (as even integer coordinates), find the number of trees inside the orchard (including on the boundary) where both coordinates are even.

Input Format:
First line: N (number of corners).
Next N lines: Two space-separated even integers (x y) for each corner, given in order (clockwise or counter-clockwise).

Output Format:
The number of trees in the orchard (points with both coordinates even that lie inside or on the polygon boundary).`,
    examples: [
      { input: "4\n0 0\n4 0\n4 4\n0 4", output: "9" },
      { input: "3\n0 0\n4 0\n0 4", output: "6" }
    ],
    hiddenTests: [
      { input: "4\n0 0\n2 0\n2 2\n0 2", output: "4" },
      { input: "4\n0 0\n6 0\n6 6\n0 6", output: "16" },
      { input: "3\n0 0\n6 0\n0 6", output: "10" },
      { input: "4\n0 0\n8 0\n8 4\n0 4", output: "15" }
    ],
    constraints: ["All coordinates are even integers", "Polygon may be non-convex"],
    starterCode: {
      python: `n = int(input())
corners = []
for _ in range(n):
    x, y = map(int, input().split())
    corners.append((x, y))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l.trim()))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const corners = [];
    for (let i = 1; i <= n; i++) {
      const [x, y] = lines[i].split(' ').map(Number);
      corners.push([x, y]);
    }
    // Write your code here

  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    int x[100], y[100];
    for (int i = 0; i < n; i++) scanf("%d %d", &x[i], &y[i]);
    // Write your code here

    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] corners = new int[n][2];
        for (int i = 0; i < n; i++) {
            corners[i][0] = sc.nextInt();
            corners[i][1] = sc.nextInt();
        }
        // Write your code here

    }
}`
    },
    solution: `n = int(input())
corners = []
for _ in range(n):
    x, y = map(int, input().split())
    corners.append((x, y))

# Find bounding box and check each even-even point
min_x = min(c[0] for c in corners)
max_x = max(c[0] for c in corners)
min_y = min(c[1] for c in corners)
max_y = max(c[1] for c in corners)

def point_in_polygon(px, py, polygon):
    n = len(polygon)
    inside = False
    j = n - 1
    for i in range(n):
        xi, yi = polygon[i]
        xj, yj = polygon[j]
        # Check if point is on edge
        if (yi <= py < yj or yj <= py < yi):
            if px < (xj - xi) * (py - yi) / (yj - yi) + xi:
                inside = not inside
        j = i
    return inside

def on_segment(px, py, polygon):
    n = len(polygon)
    for i in range(n):
        x1, y1 = polygon[i]
        x2, y2 = polygon[(i+1) % n]
        # Check collinearity
        cross = (x2-x1)*(py-y1) - (y2-y1)*(px-x1)
        if cross == 0:
            if min(x1,x2) <= px <= max(x1,x2) and min(y1,y2) <= py <= max(y1,y2):
                return True
    return False

count = 0
x = min_x
while x <= max_x:
    y = min_y
    while y <= max_y:
        if point_in_polygon(x, y, corners) or on_segment(x, y, corners):
            count += 1
        y += 2
    x += 2
print(count)`
  }
];

// Category metadata for Gemini PYQ
const geminiCategories = [
  { name: "All Questions", icon: "📋", count: geminiQuestions.length },
  { name: "NQT", icon: "🎯", count: geminiQuestions.filter(q => q.category === "NQT").length },
  { name: "CodeVita", icon: "🏆", count: geminiQuestions.filter(q => q.category === "CodeVita").length },
  { name: "Digital", icon: "💻", count: geminiQuestions.filter(q => q.category === "Digital").length },
  { name: "TAG", icon: "🏅", count: geminiQuestions.filter(q => q.category === "TAG").length },
  { name: "Ninja", icon: "🥷", count: geminiQuestions.filter(q => q.category === "Ninja").length }
];

const geminiDifficultyStats = {
  Easy: geminiQuestions.filter(q => q.difficulty === "Easy").length,
  Medium: geminiQuestions.filter(q => q.difficulty === "Medium").length,
  Hard: geminiQuestions.filter(q => q.difficulty === "Hard").length
};

const geminiAllTags = [...new Set(geminiQuestions.flatMap(q => q.tags))].sort();

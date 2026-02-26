const questions = [
  // ==================== TCS NQT CODING PYQs ====================
  {
    id: 1,
    title: "Sum of Digits of a Number",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Basics"],
    description: `Given a positive integer N, write a program to find the sum of all digits of N. If the number is negative, consider the sum of digits of its absolute value.

Input Format:
The first line contains an integer N.

Output Format:
Print the sum of digits of N.`,
    examples: [
      { input: "1234", output: "10" },
      { input: "987", output: "24" }
    ],
    constraints: ["-10^9 <= N <= 10^9"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
n = abs(n)
print(sum(int(d) for d in str(n)))`
  },
  {
    id: 2,
    title: "Reverse a Number",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Basics"],
    description: `Given a positive integer N, write a program to reverse the digits of N. Leading zeros after reversal should be ignored. For example, if N = 1200, the reversed number is 21.

Input Format:
The first line contains a positive integer N.

Output Format:
Print the reversed number.`,
    examples: [
      { input: "1234", output: "4321" },
      { input: "1200", output: "21" }
    ],
    constraints: ["1 <= N <= 10^9"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
print(int(str(n)[::-1]))`
  },
  {
    id: 3,
    title: "Check Palindrome Number",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Basics"],
    description: `Given a positive integer N, write a program to check whether N is a palindrome number or not. A palindrome number reads the same backward as forward. Print "Palindrome" if it is, otherwise print "Not Palindrome".

Input Format:
The first line contains a positive integer N.

Output Format:
Print "Palindrome" or "Not Palindrome".`,
    examples: [
      { input: "12321", output: "Palindrome" },
      { input: "1234", output: "Not Palindrome" }
    ],
    constraints: ["1 <= N <= 10^9"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
s = str(n)
print("Palindrome" if s == s[::-1] else "Not Palindrome")`
  },
  {
    id: 4,
    title: "Count Vowels and Consonants",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Basics"],
    description: `Given a string S consisting of only English alphabets, write a program to count the number of vowels and consonants in S. Vowels are A, E, I, O, U (case-insensitive). Print the count of vowels followed by number of consonants, separated by a space.

Input Format:
The first line contains the string S consisting of only English alphabets (no spaces).

Output Format:
Print two space-separated integers — the count of vowels and consonants.`,
    examples: [
      { input: "TCSNationalQualifier", output: "8 12" },
      { input: "Hello", output: "2 3" }
    ],
    constraints: ["1 <= |S| <= 10^5", "S contains only English alphabets"],
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
#include <ctype.h>
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
v = sum(1 for c in s if c.lower() in 'aeiou')
print(v, len(s) - v)`
  },
  {
    id: 5,
    title: "Check Prime Number",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number Theory"],
    description: `Given a positive integer N, write a program to determine whether N is a prime number or not. A prime number is a number greater than 1 that has no positive divisors other than 1 and itself. Print "Prime" if N is prime, otherwise print "Not Prime".

Input Format:
The first line contains a positive integer N.

Output Format:
Print "Prime" or "Not Prime".`,
    examples: [
      { input: "7", output: "Prime" },
      { input: "12", output: "Not Prime" }
    ],
    constraints: ["1 <= N <= 10^6"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
if n < 2:
    print("Not Prime")
else:
    is_prime = True
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            is_prime = False
            break
    print("Prime" if is_prime else "Not Prime")`
  },
  {
    id: 6,
    title: "GCD of Two Numbers",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number Theory"],
    description: `Given two positive integers A and B, write a program to find their Greatest Common Divisor (GCD) without using any built-in library function. The GCD of two numbers is the largest positive integer that divides both numbers without leaving a remainder.

Input Format:
The first line contains two space-separated positive integers A and B.

Output Format:
Print the GCD of A and B.`,
    examples: [
      { input: "12 18", output: "6" },
      { input: "100 75", output: "25" }
    ],
    constraints: ["1 <= A, B <= 10^9"],
    starterCode: {
      python: `a, b = map(int, input().split())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [a, b] = lines[0].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt();
        // Write your code here
        
    }
}`
    },
    solution: `a, b = map(int, input().split())
while b:
    a, b = b, a % b
print(a)`
  },
  {
    id: 7,
    title: "Factorial of a Number",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Basics"],
    description: `Given a non-negative integer N, write a program to find the factorial of N. The factorial of N (denoted as N!) is the product of all positive integers less than or equal to N. By convention, 0! = 1.

Input Format:
The first line contains a non-negative integer N.

Output Format:
Print the factorial of N.`,
    examples: [
      { input: "5", output: "120" },
      { input: "0", output: "1" }
    ],
    constraints: ["0 <= N <= 20"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
fact = 1
for i in range(1, n + 1):
    fact *= i
print(fact)`
  },
  {
    id: 8,
    title: "Fibonacci Series up to N Terms",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Series"],
    description: `Given a positive integer N, write a program to print the first N terms of the Fibonacci series. The Fibonacci series starts with 0 and 1, and each subsequent term is the sum of the two preceding terms: 0, 1, 1, 2, 3, 5, 8, 13, ...

Input Format:
The first line contains a positive integer N.

Output Format:
Print the first N terms of the Fibonacci series, separated by spaces.`,
    examples: [
      { input: "6", output: "0 1 1 2 3 5" },
      { input: "1", output: "0" }
    ],
    constraints: ["1 <= N <= 50"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
a, b = 0, 1
res = []
for _ in range(n):
    res.append(str(a))
    a, b = b, a + b
print(' '.join(res))`
  },
  {
    id: 9,
    title: "Check Perfect Number",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number Theory"],
    description: `Given a positive integer N, write a program to check whether N is a perfect number or not. A perfect number is a positive integer that is equal to the sum of its proper divisors (all positive divisors excluding the number itself). For example, 6 = 1 + 2 + 3. Print "Perfect" if N is a perfect number, otherwise print "Not Perfect".

Input Format:
The first line contains a positive integer N.

Output Format:
Print "Perfect" or "Not Perfect".`,
    examples: [
      { input: "6", output: "Perfect" },
      { input: "28", output: "Perfect" },
      { input: "12", output: "Not Perfect" }
    ],
    constraints: ["1 <= N <= 10^6"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
s = sum(i for i in range(1, n) if n % i == 0)
print("Perfect" if s == n else "Not Perfect")`
  },
  {
    id: 10,
    title: "Check Armstrong Number",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number Theory"],
    description: `Given a positive integer N, write a program to check whether N is an Armstrong number or not. An Armstrong number (also known as a narcissistic number) of K digits is a number where the sum of each digit raised to the power K equals the number itself. For example, 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153. Print "Armstrong" if N is an Armstrong number, otherwise print "Not Armstrong".

Input Format:
The first line contains a positive integer N.

Output Format:
Print "Armstrong" or "Not Armstrong".`,
    examples: [
      { input: "153", output: "Armstrong" },
      { input: "123", output: "Not Armstrong" }
    ],
    constraints: ["1 <= N <= 10^9"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
digits = str(n)
k = len(digits)
s = sum(int(d) ** k for d in digits)
print("Armstrong" if s == n else "Not Armstrong")`
  },
  {
    id: 11,
    title: "LCM of Two Numbers",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number Theory"],
    description: `Given two positive integers A and B, write a program to find their Least Common Multiple (LCM). The LCM of two numbers is the smallest positive integer that is divisible by both A and B. Use the relation LCM(A,B) = (A * B) / GCD(A,B).

Input Format:
The first line contains two space-separated positive integers A and B.

Output Format:
Print the LCM of A and B.`,
    examples: [
      { input: "4 6", output: "12" },
      { input: "12 18", output: "36" }
    ],
    constraints: ["1 <= A, B <= 10^6"],
    starterCode: {
      python: `a, b = map(int, input().split())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [a, b] = lines[0].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt();
        // Write your code here
        
    }
}`
    },
    solution: `a, b = map(int, input().split())
x, y = a, b
while y:
    x, y = y, x % y
print(a * b // x)`
  },
  {
    id: 12,
    title: "Check Palindrome String",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Basics"],
    description: `Given a string S, write a program to check whether the string is a palindrome or not. A string is a palindrome if it reads the same forwards and backwards. The comparison should be case-sensitive. Print "Palindrome" if it is, otherwise print "Not Palindrome".

Input Format:
The first line contains the string S.

Output Format:
Print "Palindrome" or "Not Palindrome".`,
    examples: [
      { input: "madam", output: "Palindrome" },
      { input: "hello", output: "Not Palindrome" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
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
print("Palindrome" if s == s[::-1] else "Not Palindrome")`
  },
  {
    id: 13,
    title: "Remove Duplicate Characters from String",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Basics"],
    description: `Given a string S, write a program to remove all duplicate characters from the string. Keep only the first occurrence of each character and maintain the original order. Print the resulting string.

Input Format:
The first line contains the string S.

Output Format:
Print the string with duplicate characters removed.`,
    examples: [
      { input: "programming", output: "progamin" },
      { input: "abcabc", output: "abc" }
    ],
    constraints: ["1 <= |S| <= 10^5", "S contains only lowercase English alphabets"],
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
seen = set()
res = []
for c in s:
    if c not in seen:
        seen.add(c)
        res.append(c)
print(''.join(res))`
  },
  {
    id: 14,
    title: "Check Anagram",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Sorting"],
    description: `Given two strings S1 and S2, write a program to check whether they are anagrams of each other. Two strings are anagrams if they contain the same characters with the same frequencies, regardless of order. The comparison should be case-insensitive. Print "Anagram" if they are anagrams, otherwise print "Not Anagram".

Input Format:
The first line contains the string S1.
The second line contains the string S2.

Output Format:
Print "Anagram" or "Not Anagram".`,
    examples: [
      { input: "listen\nsilent", output: "Anagram" },
      { input: "hello\nworld", output: "Not Anagram" }
    ],
    constraints: ["1 <= |S1|, |S2| <= 10^5"],
    starterCode: {
      python: `s1 = input()
s2 = input()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const s1 = lines[0], s2 = lines[1];
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
#include <string.h>
#include <ctype.h>
int main() {
    char s1[100001], s2[100001];
    scanf("%s", s1);
    scanf("%s", s2);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.nextLine();
        String s2 = sc.nextLine();
        // Write your code here
        
    }
}`
    },
    solution: `s1 = input().lower()
s2 = input().lower()
print("Anagram" if sorted(s1) == sorted(s2) else "Not Anagram")`
  },
  {
    id: 15,
    title: "Sum of All Prime Numbers up to N",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number Theory"],
    description: `Given a positive integer N, write a program to find the sum of all prime numbers from 2 to N (inclusive). A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

Input Format:
The first line contains a positive integer N.

Output Format:
Print the sum of all prime numbers from 2 to N.`,
    examples: [
      { input: "10", output: "17" },
      { input: "20", output: "77" }
    ],
    constraints: ["2 <= N <= 10^6"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
def is_prime(x):
    if x < 2: return False
    for i in range(2, int(x**0.5)+1):
        if x % i == 0: return False
    return True
print(sum(i for i in range(2, n+1) if is_prime(i)))`
  },
  {
    id: 16,
    title: "Decimal to Binary Conversion",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number System"],
    description: `Given a positive integer N in decimal, write a program to convert it to its binary representation. Do not use any built-in conversion functions. Print the binary representation as a string of 0s and 1s.

Input Format:
The first line contains a positive integer N.

Output Format:
Print the binary representation of N.`,
    examples: [
      { input: "10", output: "1010" },
      { input: "7", output: "111" }
    ],
    constraints: ["1 <= N <= 10^9"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
if n == 0:
    print(0)
else:
    b = ''
    while n > 0:
        b = str(n % 2) + b
        n //= 2
    print(b)`
  },
  {
    id: 17,
    title: "Reverse Words in a String",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Basics"],
    description: `Given a sentence S consisting of words separated by spaces, write a program to reverse the order of words in the sentence. Each word itself should not be reversed, only the order of the words. Multiple spaces between words should be treated as a single space.

Input Format:
The first line contains the sentence S.

Output Format:
Print the sentence with words in reversed order.`,
    examples: [
      { input: "I love programming", output: "programming love I" },
      { input: "TCS NQT Coding Test", output: "Test Coding NQT TCS" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
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
    fgets(s, 100001, stdin);
    s[strcspn(s, "\\n")] = 0;
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
print(' '.join(s.split()[::-1]))`
  },
  {
    id: 18,
    title: "Most Frequent Character in a String",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Hashing"],
    description: `Given a string S consisting of only lowercase English alphabets, write a program to find the most frequently occurring character. If there are multiple characters with the same maximum frequency, print the one that appears first in the string.

Input Format:
The first line contains the string S.

Output Format:
Print the most frequent character followed by its frequency, separated by a space.`,
    examples: [
      { input: "programming", output: "g 2" },
      { input: "aabbcc", output: "a 2" }
    ],
    constraints: ["1 <= |S| <= 10^5", "S contains only lowercase English alphabets"],
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
freq = {}
for c in s:
    freq[c] = freq.get(c, 0) + 1
max_freq = max(freq.values())
for c in s:
    if freq[c] == max_freq:
        print(c, max_freq)
        break`
  },
  {
    id: 19,
    title: "First Non-Repeating Character",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Hashing"],
    description: `Given a string S consisting of only lowercase English alphabets, write a program to find the first non-repeating (unique) character in the string. If all characters repeat, print "-1".

Input Format:
The first line contains the string S.

Output Format:
Print the first non-repeating character, or "-1" if none exists.`,
    examples: [
      { input: "aabcbd", output: "c" },
      { input: "aabbcc", output: "-1" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
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
freq = {}
for c in s:
    freq[c] = freq.get(c, 0) + 1
for c in s:
    if freq[c] == 1:
        print(c)
        break
else:
    print(-1)`
  },
  {
    id: 20,
    title: "Check Pangram",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Basics"],
    description: `Given a string S, write a program to check whether the string is a pangram or not. A pangram is a sentence that contains every letter of the English alphabet at least once. The check should be case-insensitive. Non-alphabetic characters should be ignored. Print "Pangram" if it is, otherwise print "Not Pangram".

Input Format:
The first line contains the string S.

Output Format:
Print "Pangram" or "Not Pangram".`,
    examples: [
      { input: "The quick brown fox jumps over the lazy dog", output: "Pangram" },
      { input: "Hello World", output: "Not Pangram" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
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
#include <ctype.h>
int main() {
    char s[100001];
    fgets(s, 100001, stdin);
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
    solution: `s = input().lower()
chars = set(c for c in s if c.isalpha())
print("Pangram" if len(chars) == 26 else "Not Pangram")`
  },
  {
    id: 21,
    title: "Strong Number Check",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number Theory"],
    description: `Given a positive integer N, write a program to check whether N is a Strong number or not. A Strong number is a number whose sum of factorials of each digit equals the number itself. For example, 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145. Print "Strong" if N is a strong number, otherwise print "Not Strong".

Input Format:
The first line contains a positive integer N.

Output Format:
Print "Strong" or "Not Strong".`,
    examples: [
      { input: "145", output: "Strong" },
      { input: "123", output: "Not Strong" }
    ],
    constraints: ["1 <= N <= 10^6"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
def fact(x):
    r = 1
    for i in range(1, x+1): r *= i
    return r
s = sum(fact(int(d)) for d in str(n))
print("Strong" if s == n else "Not Strong")`
  },
  {
    id: 22,
    title: "String Compression (Run-Length Encoding)",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Basics"],
    description: `Given a string S consisting of only lowercase English alphabets, write a program to perform basic run-length encoding compression on it. Replace consecutive repeating characters with the character followed by its count. If a character appears only once, just write the character without a count.

Input Format:
The first line contains the string S.

Output Format:
Print the compressed string.`,
    examples: [
      { input: "aaabbbccdd", output: "a3b3c2d2" },
      { input: "abcd", output: "abcd" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
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
res = ''
i = 0
while i < len(s):
    c = s[i]
    count = 0
    while i < len(s) and s[i] == c:
        count += 1
        i += 1
    res += c + (str(count) if count > 1 else '')
print(res)`
  },
  {
    id: 23,
    title: "Second Largest Element in Array",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Arrays", "Basics"],
    description: `Given an array of N integers, write a program to find the second largest element in the array. If there is no second largest element (all elements are the same), print "-1".

Input Format:
The first line contains a positive integer N, the size of the array.
The second line contains N space-separated integers representing the array elements.

Output Format:
Print the second largest element, or "-1" if it does not exist.`,
    examples: [
      { input: "5\n12 35 1 10 34", output: "34" },
      { input: "3\n5 5 5", output: "-1" }
    ],
    constraints: ["2 <= N <= 10^5", "-10^9 <= array elements <= 10^9"],
    starterCode: {
      python: `n = int(input())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    int arr[100001];
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
unique = list(set(arr))
if len(unique) < 2:
    print(-1)
else:
    unique.sort(reverse=True)
    print(unique[1])`
  },
  {
    id: 24,
    title: "Rotate Array by K Positions",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Arrays", "Basics"],
    description: `Given an array of N integers and a positive integer K, write a program to rotate the array to the right by K positions. The last K elements move to the front of the array. Print the resulting array.

Input Format:
The first line contains two space-separated integers N (size of array) and K (positions to rotate).
The second line contains N space-separated integers representing the array elements.

Output Format:
Print the rotated array elements separated by spaces.`,
    examples: [
      { input: "5 2\n1 2 3 4 5", output: "4 5 1 2 3" },
      { input: "4 1\n10 20 30 40", output: "40 10 20 30" }
    ],
    constraints: ["1 <= N <= 10^5", "1 <= K <= 10^5"],
    starterCode: {
      python: `n, k = map(int, input().split())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [n, k] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n, k;
    scanf("%d %d", &n, &k);
    int arr[100001];
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
k = k % n
rotated = arr[-k:] + arr[:-k]
print(' '.join(map(str, rotated)))`
  },
  {
    id: 25,
    title: "Missing Number in Array",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Arrays", "Math"],
    description: `Given an array of N-1 distinct integers in the range 1 to N, write a program to find the missing number. Exactly one number from 1 to N is missing from the array.

Input Format:
The first line contains a positive integer N.
The second line contains N-1 space-separated integers.

Output Format:
Print the missing number.`,
    examples: [
      { input: "5\n1 2 4 5", output: "3" },
      { input: "4\n1 3 4", output: "2" }
    ],
    constraints: ["2 <= N <= 10^6"],
    starterCode: {
      python: `n = int(input())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    int arr[1000001];
    for (int i = 0; i < n-1; i++) scanf("%d", &arr[i]);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n-1];
        for (int i = 0; i < n-1; i++) arr[i] = sc.nextInt();
        // Write your code here
        
    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
print(n * (n + 1) // 2 - sum(arr))`
  },
  {
    id: 26,
    title: "Prime Factors of a Number",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number Theory"],
    description: `Given a positive integer N, write a program to find all the prime factors of N. Print the prime factors in ascending order, separated by spaces. If a prime factor divides N multiple times, print it that many times.

Input Format:
The first line contains a positive integer N.

Output Format:
Print all prime factors of N in ascending order, separated by spaces.`,
    examples: [
      { input: "12", output: "2 2 3" },
      { input: "315", output: "3 3 5 7" }
    ],
    constraints: ["2 <= N <= 10^9"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    let n = parseInt(lines[0]);
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
    solution: `n = int(input())
factors = []
d = 2
while d * d <= n:
    while n % d == 0:
        factors.append(d)
        n //= d
    d += 1
if n > 1:
    factors.append(n)
print(' '.join(map(str, factors)))`
  },
  {
    id: 27,
    title: "Sort Array Without Using Inbuilt Sort",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Arrays", "Sorting"],
    description: `Given an array of N integers, write a program to sort the array in ascending order without using any built-in sort function. You may use any sorting algorithm of your choice (Bubble Sort, Selection Sort, Insertion Sort, etc.).

Input Format:
The first line contains a positive integer N.
The second line contains N space-separated integers.

Output Format:
Print the sorted array elements separated by spaces.`,
    examples: [
      { input: "5\n64 25 12 22 11", output: "11 12 22 25 64" },
      { input: "4\n4 3 2 1", output: "1 2 3 4" }
    ],
    constraints: ["1 <= N <= 10^4", "-10^6 <= array elements <= 10^6"],
    starterCode: {
      python: `n = int(input())
arr = list(map(int, input().split()))
# Write your code here (do not use sort/sorted)
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here (do not use Array.sort)
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    int arr[10001];
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
        // Write your code here (do not use Arrays.sort)
        
    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
for i in range(n):
    for j in range(0, n-i-1):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
print(' '.join(map(str, arr)))`
  },
  {
    id: 28,
    title: "Matrix Transpose",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Matrix", "Basics"],
    description: `Given a matrix of M rows and N columns, write a program to find its transpose. The transpose of a matrix is obtained by interchanging its rows and columns, i.e., the element at position (i,j) moves to position (j,i).

Input Format:
The first line contains two space-separated integers M and N.
The next M lines each contain N space-separated integers representing the matrix.

Output Format:
Print the transposed matrix. Each row of the transposed matrix should be on a new line with elements separated by spaces.`,
    examples: [
      { input: "2 3\n1 2 3\n4 5 6", output: "1 4\n2 5\n3 6" },
      { input: "3 3\n1 2 3\n4 5 6\n7 8 9", output: "1 4 7\n2 5 8\n3 6 9" }
    ],
    constraints: ["1 <= M, N <= 100"],
    starterCode: {
      python: `m, n = map(int, input().split())
matrix = []
for _ in range(m):
    row = list(map(int, input().split()))
    matrix.append(row)
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [m, n] = lines[0].split(' ').map(Number);
    const matrix = [];
    for (let i = 1; i <= m; i++)
      matrix.push(lines[i].split(' ').map(Number));
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int mat[100][100];
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &mat[i][j]);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt(), n = sc.nextInt();
        int[][] mat = new int[m][n];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                mat[i][j] = sc.nextInt();
        // Write your code here
        
    }
}`
    },
    solution: `m, n = map(int, input().split())
matrix = []
for _ in range(m):
    matrix.append(list(map(int, input().split())))
for j in range(n):
    print(' '.join(str(matrix[i][j]) for i in range(m)))`
  },
  {
    id: 29,
    title: "Find Pair with Given Sum",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Arrays", "Hashing"],
    description: `Given an array of N integers and a target sum K, write a program to determine if there exists a pair of elements in the array whose sum equals K. Print "Yes" if such a pair exists, otherwise print "No".

Input Format:
The first line contains two space-separated integers N (size of array) and K (target sum).
The second line contains N space-separated integers representing the array elements.

Output Format:
Print "Yes" or "No".`,
    examples: [
      { input: "5 9\n1 2 3 4 5", output: "Yes" },
      { input: "4 20\n1 2 3 4", output: "No" }
    ],
    constraints: ["2 <= N <= 10^5", "-10^9 <= elements, K <= 10^9"],
    starterCode: {
      python: `n, k = map(int, input().split())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [n, k] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n, k;
    scanf("%d %d", &n, &k);
    int arr[100001];
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
seen = set()
found = False
for x in arr:
    if k - x in seen:
        found = True
        break
    seen.add(x)
print("Yes" if found else "No")`
  },
  {
    id: 30,
    title: "Binary to Decimal Conversion",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number System"],
    description: `Given a binary number as a string, write a program to convert it to its decimal equivalent. Do not use any built-in conversion functions.

Input Format:
The first line contains a string representing a binary number (consisting of only 0s and 1s).

Output Format:
Print the decimal equivalent of the binary number.`,
    examples: [
      { input: "1010", output: "10" },
      { input: "11111", output: "31" }
    ],
    constraints: ["1 <= |S| <= 30", "S contains only characters 0 and 1"],
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
    char s[31];
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
result = 0
for bit in s:
    result = result * 2 + int(bit)
print(result)`
  },
  {
    id: 31,
    title: "Frequency of Each Character",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Hashing"],
    description: `Given a string S consisting of only lowercase English alphabets, write a program to print the frequency of each character that appears in the string. Print the characters in alphabetical order, each followed by its frequency, separated by a space, one per line.

Input Format:
The first line contains the string S.

Output Format:
Print each character and its frequency on a new line in alphabetical order, separated by a space.`,
    examples: [
      { input: "apple", output: "a 1\ne 1\nl 1\np 2" },
      { input: "banana", output: "a 3\nb 1\nn 2" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
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
freq = {}
for c in s:
    freq[c] = freq.get(c, 0) + 1
for c in sorted(freq.keys()):
    print(c, freq[c])`
  },
  {
    id: 32,
    title: "Longest Word in a Sentence",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Basics"],
    description: `Given a sentence S consisting of words separated by spaces, write a program to find the longest word in the sentence. If there are multiple words with the same maximum length, print the first one that appears.

Input Format:
The first line contains the sentence S.

Output Format:
Print the longest word.`,
    examples: [
      { input: "I love programming in python", output: "programming" },
      { input: "TCS National Qualifier Test", output: "Qualifier" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
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
    fgets(s, 100001, stdin);
    s[strcspn(s, "\\n")] = 0;
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
words = s.split()
longest = max(words, key=len)
print(longest)`
  },
  {
    id: 33,
    title: "Caesar Cipher Encryption",
    difficulty: "Medium",
    category: "TCS NQT",
    tags: ["Strings", "Basics"],
    description: `Given a string S consisting of only lowercase English alphabets and a positive integer K (shift value), write a program to encrypt the string using Caesar Cipher. In Caesar Cipher, each letter is replaced by the letter K positions ahead in the alphabet. The alphabet wraps around, so after 'z' comes 'a'.

Input Format:
The first line contains the string S.
The second line contains the integer K (shift value).

Output Format:
Print the encrypted string.`,
    examples: [
      { input: "abc\n3", output: "def" },
      { input: "xyz\n2", output: "zab" }
    ],
    constraints: ["1 <= |S| <= 10^5", "1 <= K <= 25"],
    starterCode: {
      python: `s = input()
k = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const s = lines[0];
    const k = parseInt(lines[1]);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    char s[100001];
    int k;
    scanf("%s", s);
    scanf("%d", &k);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        int k = Integer.parseInt(sc.nextLine());
        // Write your code here
        
    }
}`
    },
    solution: `s = input()
k = int(input())
result = ''
for c in s:
    result += chr((ord(c) - ord('a') + k) % 26 + ord('a'))
print(result)`
  },
  {
    id: 34,
    title: "Power of 2 Check",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Bit Manipulation"],
    description: `Given a positive integer N, write a program to check whether N is a power of 2. Print "Yes" if N is a power of 2, otherwise print "No".

Input Format:
The first line contains a positive integer N.

Output Format:
Print "Yes" or "No".`,
    examples: [
      { input: "16", output: "Yes" },
      { input: "12", output: "No" }
    ],
    constraints: ["1 <= N <= 10^9"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
print("Yes" if n > 0 and (n & (n - 1)) == 0 else "No")`
  },
  {
    id: 35,
    title: "Count Words in a String",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Strings", "Basics"],
    description: `Given a sentence S consisting of words separated by one or more spaces, write a program to count the number of words in the sentence. Leading and trailing spaces should be ignored, and multiple consecutive spaces between words should be treated as a single separator.

Input Format:
The first line contains the sentence S.

Output Format:
Print the number of words.`,
    examples: [
      { input: "Hello World", output: "2" },
      { input: "  TCS  NQT  Coding  Test  ", output: "4" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
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
    fgets(s, 100001, stdin);
    s[strcspn(s, "\\n")] = 0;
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
print(len(s.split()))`
  },
  {
    id: 36,
    title: "Star Pattern - Right Triangle",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Patterns", "Basics"],
    description: `Given a positive integer N, write a program to print a right-angled triangle star pattern with N rows. The i-th row should contain i stars.

Input Format:
The first line contains a positive integer N.

Output Format:
Print the right-angled triangle pattern. Each row should have stars (*) separated by spaces.`,
    examples: [
      { input: "4", output: "*\n* *\n* * *\n* * * *" },
      { input: "3", output: "*\n* *\n* * *" }
    ],
    constraints: ["1 <= N <= 100"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
for i in range(1, n + 1):
    print(' '.join(['*'] * i))`
  },
  {
    id: 37,
    title: "Sum of N Natural Numbers Using Recursion",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Recursion"],
    description: `Given a positive integer N, write a program to find the sum of the first N natural numbers using recursion. Do not use the formula N*(N+1)/2 or any loop. The function must be recursive.

Input Format:
The first line contains a positive integer N.

Output Format:
Print the sum of first N natural numbers.`,
    examples: [
      { input: "5", output: "15" },
      { input: "10", output: "55" }
    ],
    constraints: ["1 <= N <= 10000"],
    starterCode: {
      python: `import sys
sys.setrecursionlimit(20000)
n = int(input())
# Write a recursive function and call it
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const n = parseInt(lines[0]);
    // Write a recursive function and call it
    
  });`,
      c: `#include <stdio.h>
// Write a recursive function here

int main() {
    int n;
    scanf("%d", &n);
    // Call recursive function and print result
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    // Write a recursive method here
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // Call recursive method and print result
        
    }
}`
    },
    solution: `import sys
sys.setrecursionlimit(20000)
def rec_sum(n):
    if n == 0:
        return 0
    return n + rec_sum(n - 1)
n = int(input())
print(rec_sum(n))`
  },
  {
    id: 38,
    title: "Intersection of Two Arrays",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Arrays", "Hashing"],
    description: `Given two arrays of integers, write a program to find their intersection — elements that appear in both arrays. Each element in the result should appear as many times as it shows in both arrays. Print the result in sorted order. If there is no intersection, print "No common elements".

Input Format:
The first line contains an integer N1, the size of the first array.
The second line contains N1 space-separated integers.
The third line contains an integer N2, the size of the second array.
The fourth line contains N2 space-separated integers.

Output Format:
Print the common elements in sorted order, separated by spaces. If none, print "No common elements".`,
    examples: [
      { input: "5\n1 2 2 3 4\n4\n2 2 3 5", output: "2 2 3" },
      { input: "3\n1 2 3\n3\n4 5 6", output: "No common elements" }
    ],
    constraints: ["1 <= N1, N2 <= 10^5"],
    starterCode: {
      python: `n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const n1 = parseInt(lines[0]);
    const arr1 = lines[1].split(' ').map(Number);
    const n2 = parseInt(lines[2]);
    const arr2 = lines[3].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n1, n2;
    scanf("%d", &n1);
    int a[100001];
    for (int i = 0; i < n1; i++) scanf("%d", &a[i]);
    scanf("%d", &n2);
    int b[100001];
    for (int i = 0; i < n2; i++) scanf("%d", &b[i]);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int[] a = new int[n1];
        for (int i = 0; i < n1; i++) a[i] = sc.nextInt();
        int n2 = sc.nextInt();
        int[] b = new int[n2];
        for (int i = 0; i < n2; i++) b[i] = sc.nextInt();
        // Write your code here
        
    }
}`
    },
    solution: `from collections import Counter
n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))
c1, c2 = Counter(arr1), Counter(arr2)
result = []
for k in c1:
    if k in c2:
        result.extend([k] * min(c1[k], c2[k]))
result.sort()
print(' '.join(map(str, result)) if result else "No common elements")`
  },
  {
    id: 39,
    title: "Merge Two Sorted Arrays",
    difficulty: "Medium",
    category: "TCS NQT",
    tags: ["Arrays", "Sorting"],
    description: `Given two sorted arrays of integers (sorted in ascending order), write a program to merge them into a single sorted array without using any built-in sort function.

Input Format:
The first line contains the integer N1, size of the first array.
The second line contains N1 space-separated integers (sorted in ascending order).
The third line contains the integer N2, size of the second array.
The fourth line contains N2 space-separated integers (sorted in ascending order).

Output Format:
Print the merged sorted array elements separated by spaces.`,
    examples: [
      { input: "3\n1 3 5\n3\n2 4 6", output: "1 2 3 4 5 6" },
      { input: "4\n1 2 8 10\n2\n3 9", output: "1 2 3 8 9 10" }
    ],
    constraints: ["1 <= N1, N2 <= 10^5"],
    starterCode: {
      python: `n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))
# Write your code here (do not use sort/sorted)
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const n1 = parseInt(lines[0]);
    const arr1 = lines[1].split(' ').map(Number);
    const n2 = parseInt(lines[2]);
    const arr2 = lines[3].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n1, n2;
    scanf("%d", &n1);
    int a[100001];
    for (int i = 0; i < n1; i++) scanf("%d", &a[i]);
    scanf("%d", &n2);
    int b[100001];
    for (int i = 0; i < n2; i++) scanf("%d", &b[i]);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int[] a = new int[n1];
        for (int i = 0; i < n1; i++) a[i] = sc.nextInt();
        int n2 = sc.nextInt();
        int[] b = new int[n2];
        for (int i = 0; i < n2; i++) b[i] = sc.nextInt();
        // Write your code here
        
    }
}`
    },
    solution: `n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))
i = j = 0
merged = []
while i < n1 and j < n2:
    if arr1[i] <= arr2[j]:
        merged.append(arr1[i]); i += 1
    else:
        merged.append(arr2[j]); j += 1
merged.extend(arr1[i:])
merged.extend(arr2[j:])
print(' '.join(map(str, merged)))`
  },
  {
    id: 40,
    title: "Valid Parentheses Check",
    difficulty: "Medium",
    category: "TCS NQT",
    tags: ["Strings", "Stacks"],
    description: `Given a string S containing only the characters '(', ')', '{', '}', '[' and ']', write a program to determine if the input string has valid (balanced) parentheses. A string is valid if every opening bracket has a corresponding closing bracket of the same type and they are properly nested. Print "Valid" if the string is valid, otherwise print "Invalid".

Input Format:
The first line contains the string S.

Output Format:
Print "Valid" or "Invalid".`,
    examples: [
      { input: "({[]})", output: "Valid" },
      { input: "({[})", output: "Invalid" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
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
stack = []
mapping = {')': '(', '}': '{', ']': '['}
valid = True
for c in s:
    if c in '({[':
        stack.append(c)
    elif c in ')}]':
        if not stack or stack[-1] != mapping[c]:
            valid = False
            break
        stack.pop()
print("Valid" if valid and not stack else "Invalid")`
  },
  // ==================== TCS DIGITAL PYQs ====================
  {
    id: 41,
    title: "Maximum Subarray Sum (Kadane's Algorithm)",
    difficulty: "Medium",
    category: "TCS Digital",
    tags: ["Arrays", "Dynamic Programming"],
    description: `Given an array of N integers (which may include negative numbers), write a program to find the contiguous subarray with the maximum sum and print that maximum sum. This is a classic problem known as the Maximum Subarray Problem.

Input Format:
The first line contains a positive integer N, the size of the array.
The second line contains N space-separated integers.

Output Format:
Print the maximum subarray sum.`,
    examples: [
      { input: "8\n-2 1 -3 4 -1 2 1 -5", output: "6" },
      { input: "5\n-1 -2 -3 -4 -5", output: "-1" }
    ],
    constraints: ["1 <= N <= 10^5", "-10^6 <= elements <= 10^6"],
    starterCode: {
      python: `n = int(input())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    int arr[100001];
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
max_sum = cur_sum = arr[0]
for i in range(1, n):
    cur_sum = max(arr[i], cur_sum + arr[i])
    max_sum = max(max_sum, cur_sum)
print(max_sum)`
  },
  {
    id: 42,
    title: "Spiral Matrix Traversal",
    difficulty: "Medium",
    category: "TCS Digital",
    tags: ["Matrix", "Simulation"],
    description: `Given a matrix of M rows and N columns, write a program to print the elements of the matrix in spiral order. Start from the top-left corner and move right, then down, then left, then up, and repeat.

Input Format:
The first line contains two space-separated integers M and N.
The next M lines each contain N space-separated integers.

Output Format:
Print the elements in spiral order, separated by spaces.`,
    examples: [
      { input: "3 3\n1 2 3\n4 5 6\n7 8 9", output: "1 2 3 6 9 8 7 4 5" },
      { input: "2 3\n1 2 3\n4 5 6", output: "1 2 3 6 5 4" }
    ],
    constraints: ["1 <= M, N <= 100"],
    starterCode: {
      python: `m, n = map(int, input().split())
matrix = []
for _ in range(m):
    matrix.append(list(map(int, input().split())))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [m, n] = lines[0].split(' ').map(Number);
    const matrix = [];
    for (let i = 1; i <= m; i++)
      matrix.push(lines[i].split(' ').map(Number));
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int mat[100][100];
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &mat[i][j]);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt(), n = sc.nextInt();
        int[][] mat = new int[m][n];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                mat[i][j] = sc.nextInt();
        // Write your code here
        
    }
}`
    },
    solution: `m, n = map(int, input().split())
matrix = []
for _ in range(m):
    matrix.append(list(map(int, input().split())))
result = []
top, bottom, left, right = 0, m-1, 0, n-1
while top <= bottom and left <= right:
    for j in range(left, right+1): result.append(matrix[top][j])
    top += 1
    for i in range(top, bottom+1): result.append(matrix[i][right])
    right -= 1
    if top <= bottom:
        for j in range(right, left-1, -1): result.append(matrix[bottom][j])
        bottom -= 1
    if left <= right:
        for i in range(bottom, top-1, -1): result.append(matrix[i][left])
        left += 1
print(' '.join(map(str, result)))`
  },
  {
    id: 43,
    title: "Next Greater Element",
    difficulty: "Medium",
    category: "TCS Digital",
    tags: ["Arrays", "Stacks"],
    description: `Given an array of N integers, write a program to find the next greater element for each element in the array. The next greater element of an element X is the first element to its right that is greater than X. If no such element exists, print -1 for that position.

Input Format:
The first line contains a positive integer N.
The second line contains N space-separated integers.

Output Format:
Print N space-separated integers representing the next greater element for each position.`,
    examples: [
      { input: "4\n4 5 2 25", output: "5 25 25 -1" },
      { input: "4\n13 7 6 12", output: "-1 12 12 -1" }
    ],
    constraints: ["1 <= N <= 10^5"],
    starterCode: {
      python: `n = int(input())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    int arr[100001];
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
result = [-1] * n
stack = []
for i in range(n):
    while stack and arr[stack[-1]] < arr[i]:
        result[stack.pop()] = arr[i]
    stack.append(i)
print(' '.join(map(str, result)))`
  },
  {
    id: 44,
    title: "Longest Common Subsequence",
    difficulty: "Hard",
    category: "TCS Digital",
    tags: ["Strings", "Dynamic Programming"],
    description: `Given two strings S1 and S2, write a program to find the length of the Longest Common Subsequence (LCS). A subsequence is a sequence that can be derived from a string by deleting some or no characters without changing the relative order of the remaining characters.

Input Format:
The first line contains the string S1.
The second line contains the string S2.

Output Format:
Print the length of the longest common subsequence.`,
    examples: [
      { input: "ABCBDAB\nBDCABA", output: "4" },
      { input: "AGGTAB\nGXTXAYB", output: "4" }
    ],
    constraints: ["1 <= |S1|, |S2| <= 1000"],
    starterCode: {
      python: `s1 = input()
s2 = input()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const s1 = lines[0], s2 = lines[1];
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    char s1[1001], s2[1001];
    scanf("%s", s1);
    scanf("%s", s2);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.nextLine();
        String s2 = sc.nextLine();
        // Write your code here
        
    }
}`
    },
    solution: `s1 = input()
s2 = input()
m, n = len(s1), len(s2)
dp = [[0] * (n + 1) for _ in range(m + 1)]
for i in range(1, m + 1):
    for j in range(1, n + 1):
        if s1[i-1] == s2[j-1]:
            dp[i][j] = dp[i-1][j-1] + 1
        else:
            dp[i][j] = max(dp[i-1][j], dp[i][j-1])
print(dp[m][n])`
  },
  {
    id: 45,
    title: "0/1 Knapsack Problem",
    difficulty: "Hard",
    category: "TCS Digital",
    tags: ["Dynamic Programming", "Arrays"],
    description: `Given N items, each with a weight and a value, and a knapsack with capacity W, write a program to determine the maximum total value that can be put in the knapsack. Each item can either be included or excluded (you cannot take a fraction of an item).

Input Format:
The first line contains two space-separated integers N (number of items) and W (knapsack capacity).
The next N lines each contain two space-separated integers: the weight and value of the item.

Output Format:
Print the maximum value achievable.`,
    examples: [
      { input: "3 50\n10 60\n20 100\n30 120", output: "220" },
      { input: "4 7\n1 1\n3 4\n4 5\n5 7", output: "9" }
    ],
    constraints: ["1 <= N <= 100", "1 <= W <= 1000"],
    starterCode: {
      python: `n, w = map(int, input().split())
items = []
for _ in range(n):
    wt, val = map(int, input().split())
    items.append((wt, val))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [n, w] = lines[0].split(' ').map(Number);
    const items = [];
    for (let i = 1; i <= n; i++) {
      const [wt, val] = lines[i].split(' ').map(Number);
      items.push([wt, val]);
    }
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n, w;
    scanf("%d %d", &n, &w);
    int wt[101], val[101];
    for (int i = 0; i < n; i++)
        scanf("%d %d", &wt[i], &val[i]);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), w = sc.nextInt();
        int[] wt = new int[n], val = new int[n];
        for (int i = 0; i < n; i++) {
            wt[i] = sc.nextInt(); val[i] = sc.nextInt();
        }
        // Write your code here
        
    }
}`
    },
    solution: `n, w = map(int, input().split())
items = []
for _ in range(n):
    wt, val = map(int, input().split())
    items.append((wt, val))
dp = [[0] * (w + 1) for _ in range(n + 1)]
for i in range(1, n + 1):
    wt_i, val_i = items[i-1]
    for j in range(w + 1):
        dp[i][j] = dp[i-1][j]
        if j >= wt_i:
            dp[i][j] = max(dp[i][j], dp[i-1][j - wt_i] + val_i)
print(dp[n][w])`
  },
  {
    id: 46,
    title: "Binary Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "TCS Digital",
    tags: ["Arrays", "Binary Search"],
    description: `Given a sorted array of N distinct integers that has been rotated at some unknown pivot point, and a target value K, write a program to search for K in the array. Print the index (0-based) of K if found, else print -1. Your solution should be O(log N).

Input Format:
The first line contains two space-separated integers N and K.
The second line contains N space-separated integers (the rotated sorted array).

Output Format:
Print the 0-based index of K, or -1 if not found.`,
    examples: [
      { input: "7 3\n4 5 6 7 0 1 3", output: "6" },
      { input: "5 8\n3 4 5 1 2", output: "-1" }
    ],
    constraints: ["1 <= N <= 10^5"],
    starterCode: {
      python: `n, k = map(int, input().split())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [n, k] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n, k;
    scanf("%d %d", &n, &k);
    int arr[100001];
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
lo, hi = 0, n - 1
result = -1
while lo <= hi:
    mid = (lo + hi) // 2
    if arr[mid] == k:
        result = mid
        break
    if arr[lo] <= arr[mid]:
        if arr[lo] <= k < arr[mid]:
            hi = mid - 1
        else:
            lo = mid + 1
    else:
        if arr[mid] < k <= arr[hi]:
            lo = mid + 1
        else:
            hi = mid - 1
print(result)`
  },
  {
    id: 47,
    title: "Kth Largest Element in Array",
    difficulty: "Medium",
    category: "TCS Digital",
    tags: ["Arrays", "Sorting"],
    description: `Given an unsorted array of N integers and a positive integer K, write a program to find the Kth largest element in the array. Note: It is the Kth largest in sorted order, not the Kth distinct element.

Input Format:
The first line contains two space-separated integers N and K.
The second line contains N space-separated integers.

Output Format:
Print the Kth largest element.`,
    examples: [
      { input: "6 2\n3 2 1 5 6 4", output: "5" },
      { input: "4 3\n7 6 5 4", output: "5" }
    ],
    constraints: ["1 <= K <= N <= 10^5"],
    starterCode: {
      python: `n, k = map(int, input().split())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [n, k] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n, k;
    scanf("%d %d", &n, &k);
    int arr[100001];
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
arr.sort(reverse=True)
print(arr[k-1])`
  },
  {
    id: 48,
    title: "Longest Palindromic Substring",
    difficulty: "Hard",
    category: "TCS Digital",
    tags: ["Strings", "Dynamic Programming"],
    description: `Given a string S, write a program to find the length of the longest palindromic substring. A substring is a contiguous sequence of characters within the string.

Input Format:
The first line contains the string S.

Output Format:
Print the length of the longest palindromic substring.`,
    examples: [
      { input: "babad", output: "3" },
      { input: "cbbd", output: "2" }
    ],
    constraints: ["1 <= |S| <= 1000"],
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
    char s[1001];
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
n = len(s)
max_len = 1
def expand(l, r):
    while l >= 0 and r < n and s[l] == s[r]:
        l -= 1
        r += 1
    return r - l - 1
for i in range(n):
    max_len = max(max_len, expand(i, i), expand(i, i + 1))
print(max_len)`
  },
  {
    id: 49,
    title: "Matrix Multiplication",
    difficulty: "Medium",
    category: "TCS Digital",
    tags: ["Matrix", "Math"],
    description: `Given two matrices A (of dimension P x Q) and B (of dimension Q x R), write a program to compute their product matrix C = A x B. The number of columns in A must equal the number of rows in B.

Input Format:
The first line contains three space-separated integers P, Q, R.
The next P lines each contain Q space-separated integers (matrix A).
The next Q lines each contain R space-separated integers (matrix B).

Output Format:
Print the resulting P x R matrix, each row on a new line with elements separated by spaces.`,
    examples: [
      { input: "2 2 2\n1 2\n3 4\n5 6\n7 8", output: "19 22\n43 50" },
      { input: "2 3 2\n1 2 3\n4 5 6\n1 2\n3 4\n5 6", output: "22 28\n49 64" }
    ],
    constraints: ["1 <= P, Q, R <= 100"],
    starterCode: {
      python: `p, q, r = map(int, input().split())
A = [list(map(int, input().split())) for _ in range(p)]
B = [list(map(int, input().split())) for _ in range(q)]
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [p, q, r] = lines[0].split(' ').map(Number);
    const A = [], B = [];
    for (let i = 1; i <= p; i++) A.push(lines[i].split(' ').map(Number));
    for (let i = p+1; i <= p+q; i++) B.push(lines[i].split(' ').map(Number));
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int p, q, r;
    scanf("%d %d %d", &p, &q, &r);
    int A[100][100], B[100][100];
    for (int i = 0; i < p; i++)
        for (int j = 0; j < q; j++) scanf("%d", &A[i][j]);
    for (int i = 0; i < q; i++)
        for (int j = 0; j < r; j++) scanf("%d", &B[i][j]);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int p = sc.nextInt(), q = sc.nextInt(), r = sc.nextInt();
        int[][] A = new int[p][q], B = new int[q][r];
        for (int i = 0; i < p; i++)
            for (int j = 0; j < q; j++) A[i][j] = sc.nextInt();
        for (int i = 0; i < q; i++)
            for (int j = 0; j < r; j++) B[i][j] = sc.nextInt();
        // Write your code here
        
    }
}`
    },
    solution: `p, q, r = map(int, input().split())
A = [list(map(int, input().split())) for _ in range(p)]
B = [list(map(int, input().split())) for _ in range(q)]
C = [[0]*r for _ in range(p)]
for i in range(p):
    for j in range(r):
        for k in range(q):
            C[i][j] += A[i][k] * B[k][j]
for row in C:
    print(' '.join(map(str, row)))`
  },
  {
    id: 50,
    title: "Frequency Sort of Characters",
    difficulty: "Medium",
    category: "TCS Digital",
    tags: ["Strings", "Sorting", "Hashing"],
    description: `Given a string S, write a program to sort the characters of the string in decreasing order of their frequency. If two characters have the same frequency, the character with the lower ASCII value comes first. Print the resulting string.

Input Format:
The first line contains the string S.

Output Format:
Print the sorted string.`,
    examples: [
      { input: "tree", output: "eert" },
      { input: "cccaaa", output: "aaaccc" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
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
from collections import Counter
freq = Counter(s)
chars = sorted(freq.keys(), key=lambda c: (-freq[c], c))
print(''.join(c * freq[c] for c in chars))`
  },
  // ==================== TCS CODEVITA PYQs ====================
  {
    id: 51,
    title: "Edit Distance",
    difficulty: "Hard",
    category: "TCS CodeVita",
    tags: ["Strings", "Dynamic Programming"],
    description: `Given two strings S1 and S2, write a program to find the minimum number of operations required to convert S1 into S2. The allowed operations are: Insert a character, Delete a character, Replace a character. Each operation counts as 1.

Input Format:
The first line contains the string S1.
The second line contains the string S2.

Output Format:
Print the minimum number of operations (edit distance).`,
    examples: [
      { input: "horse\nros", output: "3" },
      { input: "intention\nexecution", output: "5" }
    ],
    constraints: ["0 <= |S1|, |S2| <= 500"],
    starterCode: {
      python: `s1 = input()
s2 = input()
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const s1 = lines[0], s2 = lines[1];
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
#include <string.h>
int main() {
    char s1[501], s2[501];
    scanf("%s", s1);
    scanf("%s", s2);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.nextLine();
        String s2 = sc.nextLine();
        // Write your code here
        
    }
}`
    },
    solution: `s1 = input()
s2 = input()
m, n = len(s1), len(s2)
dp = [[0]*(n+1) for _ in range(m+1)]
for i in range(m+1): dp[i][0] = i
for j in range(n+1): dp[0][j] = j
for i in range(1, m+1):
    for j in range(1, n+1):
        if s1[i-1] == s2[j-1]:
            dp[i][j] = dp[i-1][j-1]
        else:
            dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
print(dp[m][n])`
  },
  {
    id: 52,
    title: "N-Queens Problem",
    difficulty: "Hard",
    category: "TCS CodeVita",
    tags: ["Backtracking", "Recursion"],
    description: `Given an integer N, write a program to find the number of distinct ways to place N queens on an N x N chessboard such that no two queens threaten each other. Two queens threaten each other if they are in the same row, column, or diagonal.

Input Format:
The first line contains a positive integer N.

Output Format:
Print the number of distinct solutions.`,
    examples: [
      { input: "4", output: "2" },
      { input: "8", output: "92" }
    ],
    constraints: ["1 <= N <= 12"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const n = parseInt(lines[0]);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int n;
    scanf("%d", &n);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    // Write your solution here
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // Write your code here
        
    }
}`
    },
    solution: `n = int(input())
count = 0
def solve(row, cols, diag1, diag2):
    global count
    if row == n:
        count += 1
        return
    for col in range(n):
        if col in cols or (row-col) in diag1 or (row+col) in diag2:
            continue
        cols.add(col); diag1.add(row-col); diag2.add(row+col)
        solve(row+1, cols, diag1, diag2)
        cols.remove(col); diag1.remove(row-col); diag2.remove(row+col)
solve(0, set(), set(), set())
print(count)`
  },
  {
    id: 53,
    title: "Longest Increasing Subsequence",
    difficulty: "Hard",
    category: "TCS CodeVita",
    tags: ["Arrays", "Dynamic Programming"],
    description: `Given an array of N integers, write a program to find the length of the Longest Increasing Subsequence (LIS). A subsequence is a sequence derived from the array by deleting some or no elements without changing the order of the remaining elements. The subsequence must be strictly increasing.

Input Format:
The first line contains a positive integer N.
The second line contains N space-separated integers.

Output Format:
Print the length of the longest increasing subsequence.`,
    examples: [
      { input: "6\n10 9 2 5 3 7", output: "3" },
      { input: "8\n0 1 0 3 2 3 4 0", output: "5" }
    ],
    constraints: ["1 <= N <= 2500"],
    starterCode: {
      python: `n = int(input())
arr = list(map(int, input().split()))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    int arr[2501];
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
dp = [1] * n
for i in range(1, n):
    for j in range(i):
        if arr[j] < arr[i]:
            dp[i] = max(dp[i], dp[j] + 1)
print(max(dp))`
  },
  {
    id: 54,
    title: "Tower of Hanoi",
    difficulty: "Medium",
    category: "TCS CodeVita",
    tags: ["Recursion", "Math"],
    description: `The Tower of Hanoi is a classic problem. Given N disks stacked on a source rod, move all disks to a destination rod using an auxiliary rod. Rules: Only one disk can be moved at a time, a larger disk cannot be placed on top of a smaller one, and only the top disk of any rod can be moved. Print each move as "Move disk X from ROD_A to ROD_B".

Input Format:
The first line contains a positive integer N (number of disks).

Output Format:
Print all the moves required. Each line: "Move disk X from A to B" where A and B are rod names (Source, Auxiliary, Destination).`,
    examples: [
      { input: "2", output: "Move disk 1 from Source to Auxiliary\nMove disk 2 from Source to Destination\nMove disk 1 from Auxiliary to Destination" },
      { input: "1", output: "Move disk 1 from Source to Destination" }
    ],
    constraints: ["1 <= N <= 15"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const n = parseInt(lines[0]);
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
// Write your recursive function here

int main() {
    int n;
    scanf("%d", &n);
    // Call your function here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    // Write your recursive method here
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // Call your method here
        
    }
}`
    },
    solution: `def hanoi(n, src, aux, dest):
    if n == 1:
        print(f"Move disk 1 from {src} to {dest}")
        return
    hanoi(n-1, src, dest, aux)
    print(f"Move disk {n} from {src} to {dest}")
    hanoi(n-1, aux, src, dest)
n = int(input())
hanoi(n, "Source", "Auxiliary", "Destination")`
  },
  {
    id: 55,
    title: "Dijkstra's Shortest Path",
    difficulty: "Hard",
    category: "TCS CodeVita",
    tags: ["Graphs", "Shortest Path"],
    description: `Given a weighted directed graph with V vertices (numbered 0 to V-1) and E edges, and a source vertex S, write a program to find the shortest distance from S to all other vertices using Dijkstra's algorithm. If a vertex is unreachable from S, print -1 for that vertex.

Input Format:
The first line contains three space-separated integers V, E, and S.
The next E lines each contain three space-separated integers U, V, W representing a directed edge from U to V with weight W.

Output Format:
Print V space-separated integers representing the shortest distance from S to vertex 0, 1, ..., V-1.`,
    examples: [
      { input: "5 6 0\n0 1 4\n0 2 1\n2 1 2\n1 3 1\n2 3 5\n3 4 3", output: "0 3 1 4 7" },
      { input: "3 2 0\n0 1 5\n1 2 3", output: "0 5 8" }
    ],
    constraints: ["1 <= V <= 1000", "0 <= E <= V*(V-1)", "0 <= W <= 10^6"],
    starterCode: {
      python: `import heapq
v, e, s = map(int, input().split())
graph = [[] for _ in range(v)]
for _ in range(e):
    u, to, w = map(int, input().split())
    graph[u].append((to, w))
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    const [v, e, s] = lines[0].split(' ').map(Number);
    const graph = Array.from({length: v}, () => []);
    for (let i = 1; i <= e; i++) {
      const [u, to, w] = lines[i].split(' ').map(Number);
      graph[u].push([to, w]);
    }
    // Write your code here
    
  });`,
      c: `#include <stdio.h>
#include <limits.h>
int main() {
    int v, e, s;
    scanf("%d %d %d", &v, &e, &s);
    // Read edges and implement Dijkstra
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int v = sc.nextInt(), e = sc.nextInt(), s = sc.nextInt();
        List<int[]>[] graph = new ArrayList[v];
        for (int i = 0; i < v; i++) graph[i] = new ArrayList<>();
        for (int i = 0; i < e; i++) {
            int u = sc.nextInt(), to = sc.nextInt(), w = sc.nextInt();
            graph[u].add(new int[]{to, w});
        }
        // Write your code here
        
    }
}`
    },
    solution: `import heapq
v, e, s = map(int, input().split())
graph = [[] for _ in range(v)]
for _ in range(e):
    u, to, w = map(int, input().split())
    graph[u].append((to, w))
dist = [float('inf')] * v
dist[s] = 0
pq = [(0, s)]
while pq:
    d, u = heapq.heappop(pq)
    if d > dist[u]: continue
    for to, w in graph[u]:
        if dist[u] + w < dist[to]:
            dist[to] = dist[u] + w
            heapq.heappush(pq, (dist[to], to))
print(' '.join(str(d) if d != float('inf') else '-1' for d in dist))`
  },
  {
    id: 56,
    title: "Neon Number Check",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number Theory"],
    description: `Given a positive integer N, write a program to check whether N is a Neon number. A Neon number is a number where the sum of the digits of the square of the number is equal to the number itself. For example, 9: 9^2 = 81, and 8 + 1 = 9. Print "Neon" if N is a neon number, otherwise print "Not Neon".

Input Format:
The first line contains a positive integer N.

Output Format:
Print "Neon" or "Not Neon".`,
    examples: [
      { input: "9", output: "Neon" },
      { input: "12", output: "Not Neon" }
    ],
    constraints: ["1 <= N <= 10^6"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
sq = n * n
print("Neon" if sum(int(d) for d in str(sq)) == n else "Not Neon")`
  },
  {
    id: 57,
    title: "Automorphic Number Check",
    difficulty: "Easy",
    category: "TCS NQT",
    tags: ["Math", "Number Theory"],
    description: `Given a positive integer N, write a program to check whether N is an Automorphic number. An Automorphic number is a number whose square ends with the number itself. For example, 25: 25^2 = 625, and 625 ends with 25. Print "Automorphic" if N is automorphic, otherwise print "Not Automorphic".

Input Format:
The first line contains a positive integer N.

Output Format:
Print "Automorphic" or "Not Automorphic".`,
    examples: [
      { input: "25", output: "Automorphic" },
      { input: "7", output: "Not Automorphic" }
    ],
    constraints: ["1 <= N <= 10^6"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
sq = n * n
print("Automorphic" if str(sq).endswith(str(n)) else "Not Automorphic")`
  },
  {
    id: 58,
    title: "Number to Words Conversion",
    difficulty: "Medium",
    category: "TCS NQT",
    tags: ["Strings", "Math"],
    description: `Given a positive integer N (0 <= N <= 9999), write a program to convert the number into its English word representation. For example, 123 should be "One Hundred Twenty Three".

Input Format:
The first line contains a non-negative integer N.

Output Format:
Print the number in English words.`,
    examples: [
      { input: "123", output: "One Hundred Twenty Three" },
      { input: "0", output: "Zero" }
    ],
    constraints: ["0 <= N <= 9999"],
    starterCode: {
      python: `n = int(input())
# Write your code here
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
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
    solution: `n = int(input())
ones = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine',
        'Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen',
        'Seventeen','Eighteen','Nineteen']
tens = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety']
if n == 0:
    print("Zero")
else:
    parts = []
    if n >= 1000:
        parts.append(ones[n//1000] + " Thousand")
        n %= 1000
    if n >= 100:
        parts.append(ones[n//100] + " Hundred")
        n %= 100
    if n >= 20:
        s = tens[n//10]
        if n % 10: s += ' ' + ones[n%10]
        parts.append(s)
    elif n > 0:
        parts.append(ones[n])
    print(' '.join(parts))`
  },
  {
    id: 59,
    title: "Print All Permutations of a String",
    difficulty: "Medium",
    category: "TCS CodeVita",
    tags: ["Strings", "Recursion", "Backtracking"],
    description: `Given a string S consisting of distinct characters, write a program to print all permutations of the string in lexicographically sorted order, one per line.

Input Format:
The first line contains the string S.

Output Format:
Print all permutations of S in lexicographically sorted order, one per line.`,
    examples: [
      { input: "abc", output: "abc\nacb\nbac\nbca\ncab\ncba" },
      { input: "ab", output: "ab\nba" }
    ],
    constraints: ["1 <= |S| <= 8", "All characters in S are distinct"],
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
// Write your recursive function here

int main() {
    char s[9];
    scanf("%s", s);
    // Write your code here
    
    return 0;
}`,
      java: `import java.util.*;
public class Main {
    // Write your recursive method here
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        // Write your code here
        
    }
}`
    },
    solution: `from itertools import permutations
s = input()
for p in sorted(permutations(s)):
    print(''.join(p))`
  },
  {
    id: 60,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "TCS Digital",
    tags: ["Strings", "Sliding Window", "Hashing"],
    description: `Given a string S, write a program to find the length of the longest substring without repeating characters.

Input Format:
The first line contains the string S.

Output Format:
Print the length of the longest substring without repeating characters.`,
    examples: [
      { input: "abcabcbb", output: "3" },
      { input: "bbbbb", output: "1" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
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
char_idx = {}
max_len = start = 0
for i, c in enumerate(s):
    if c in char_idx and char_idx[c] >= start:
        start = char_idx[c] + 1
    char_idx[c] = i
    max_len = max(max_len, i - start + 1)
print(max_len)`
  },

  // ==================== TCS TAG (Topmost Among Graduates) PYQs ====================
  {
    id: 61,
    title: "Typewriter Backspace Compare",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Strings", "Stacks"],
    description: `Alice challenged Bob to write the same word as his on a typewriter. Both are kids and are making some mistakes in typing and are making use of the '#' key on a typewriter to delete the last character printed on it. An empty text remains empty even after backspaces.

Input Format:
The first line contains a string typed by Bob.
The second line contains a string typed by Alice.

Output Format:
The first line contains 'YES' if Alice is able to print the exact words as Bob, otherwise 'NO'.`,
    examples: [
      { input: "ab#c\nad#c", output: "YES" },
      { input: "a##c\n#a#c", output: "YES" },
      { input: "abc#\nabc", output: "NO" },
      { input: "####\n####", output: "YES" },
      { input: "a\na", output: "YES" },
      { input: "a\nb", output: "NO" },
      { input: "ab##\nc#", output: "YES" }
    ],
    constraints: ["1 <= Bob.length, Alice.length <= 100000", "Bob and Alice only contain lowercase letters and '#' characters"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `def process_string(s):
    result = []
    for char in s:
        if char == '#':
            if result:
                result.pop()
        else:
            result.append(char)
    return ''.join(result)

bob = input().strip()
alice = input().strip()

if process_string(bob) == process_string(alice):
    print("YES")
else:
    print("NO")`
  },
  {
    id: 62,
    title: "Longest Sentence in a Paragraph",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Strings", "Basics"],
    description: `Sid is reading a paragraph of a story and notices N different sentences. He's curious to know which sentence is the longest. Help Sid find the length of the longest sentence in the story. Sentences are separated by a comma(,), no other symbols are used except comma.

The length of a sentence is defined by the number of words in it.

Input Format:
The first line of input contains a string where sentences are separated by commas (,).

Output Format:
Display a single integer, that denotes the length of the longest sentence (number of words).`,
    examples: [
      { input: "hello world,this is a test,hi", output: "4" },
      { input: "i am groot,we are groot today,ok", output: "4" },
      { input: "single", output: "1" },
      { input: "a b c d e,f", output: "5" },
      { input: "one,two,three,four,five", output: "1" }
    ],
    constraints: ["1 <= N <= 20"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `paragraph = input().strip()
sentences = paragraph.split(',')
max_length = 0
for sentence in sentences:
    words = sentence.strip().split()
    max_length = max(max_length, len(words))
print(max_length)`
  },
  {
    id: 63,
    title: "Code Word Decoding",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Strings", "Simulation"],
    description: `Ram and Shyam are two friends belonging to two different cities. They exchange messages weekly. The messages are very crucial so that no third person can see the message. But they sent a message via Jadav, a clever person. He usually reads the given messages. So, Ram and Shyam started talking in codewords. They set a convention for every letter in the English Alphabet.

Like 'a' to 'i' code is 1 to 9 and 'j' to 'z' code is 10# to 26#.

Now suppose, Ram is sending a message to Shyam denoted by String S.

Can you tell me the decoded message that Shyam receives?

Input Format:
The first line of input contains the string S.

Output Format:
Return the string which denotes the decoded message that Shyam receives.`,
    examples: [
      { input: "26#21#13#13#114#97820#", output: "zummanight" },
      { input: "11210#", output: "aabj" },
      { input: "1", output: "a" },
      { input: "10#11#12#", output: "jkl" },
      { input: "123", output: "abc" },
      { input: "25#26#", output: "yz" }
    ],
    constraints: ["1 <= s.length <= 10^9"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `s = input().strip()
result = []
i = 0
while i < len(s):
    if i + 2 < len(s) and s[i + 2] == '#':
        num = int(s[i:i+2])
        result.append(chr(num + 96))
        i += 3
    else:
        result.append(chr(int(s[i]) + 96))
        i += 1
print(''.join(result))`
  },
  {
    id: 64,
    title: "Magical Creature Contest",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Math", "Simulation"],
    description: `You're in a world where magical creatures engage in a peculiar contest, and you've been entrusted with keeping track of the matches. The rules are as follows:

If there is an even number of creatures, they form pairs, and a total of n/2 matches are played. The victors of these matches advance to the next round.

When there's an odd number of creatures, an intriguing twist unfolds. One of them is granted a special power and advances directly to the next stage, while the remaining creatures pair off for matches. The number of matches in this scenario is (n - 1)/2. The creature with the special power joins the winners of these matches in the next round.

Your mission is to determine the overall number of matches that take place in this magical contest until a single champion emerges.

Input Format:
An integer n represents the initial number of magical creatures in the contest.

Output Format:
An integer represents the total number of matches played in the magical contest until a single champion is determined.`,
    examples: [
      { input: "5", output: "4" },
      { input: "8", output: "7" },
      { input: "1", output: "0" },
      { input: "2", output: "1" },
      { input: "100", output: "99" }
    ],
    constraints: ["1 <= n <= 200"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
print(n - 1)`
  },
  {
    id: 65,
    title: "Sock Sets of Three",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Arrays", "Math", "Hashing"],
    description: `You are a shopkeeper and bought N pairs of socks of several colours in bulk. The colour of each pair of socks is represented as a non-negative integer. The socks are sold as sets of 3 each. A set of socks consists of 3 socks of the same colour.

You want to find the number of different sets that can be made from the N pairs of socks you bought today.

Note: The order of indices of sock pairs in the set does not matter.

Input Format:
The first line of the input contains a single integer N which denotes the number of pairs of socks that you have.
The second line of the input contains n space-separated integers a1, a2, ..., an, where ai represents the colour of the ith pair.

Output Format:
Print a single integer representing the total number of different sets of 3 socks that can be formed from the N pairs of socks.`,
    examples: [
      { input: "7\n1 3 3 1 1 3 3", output: "5" },
      { input: "5\n1 1 1 1 1", output: "10" },
      { input: "2\n1 1", output: "0" },
      { input: "3\n5 5 5", output: "1" },
      { input: "4\n1 2 3 4", output: "0" },
      { input: "1\n7", output: "0" }
    ],
    constraints: ["1 <= N <= 10^5", "0 <= ai <= 10^3"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `from collections import Counter
from math import comb

n = int(input())
sock_colors = list(map(int, input().split()))
color_count = Counter(sock_colors)
total_sets = 0
for count in color_count.values():
    if count >= 3:
        total_sets += comb(count, 3)
print(total_sets)`
  },
  {
    id: 66,
    title: "Swap Kth Nodes in Linked List",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Arrays", "Simulation"],
    description: `Ram gave Shyaam a challenge, he gave shyaam the head of a linked list, and an integer k. He asked Shyaam to swap the values of the Kth node from the beginning and the Kth node from the end (the list is 1-indexed).

Note: The number of nodes in the list is N.

Input Format:
The first line contains an integer N, representing the number of nodes in the linked list.
The second line contains N space-separated integers, each representing the value of a node in the linked list.
The third line contains an integer K, indicating the positions of the nodes to be swapped.

Output Format:
Output the linked list after swapping the values of the two specified nodes.`,
    examples: [
      { input: "5\n1 2 3 4 5\n2", output: "1 4 3 2 5" },
      { input: "4\n10 20 30 40\n1", output: "40 20 30 10" },
      { input: "1\n99\n1", output: "99 " },
      { input: "3\n5 10 15\n2", output: "5 10 15 " },
      { input: "6\n1 2 3 4 5 6\n3", output: "1 2 4 3 5 6 " }
    ],
    constraints: ["1 <= K <= N <= 10^5", "0 <= Node.val <= 10^2"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
li = list(map(int, input().split()))
k = int(input())
li[k-1], li[-k] = li[-k], li[k-1]
for ele in li:
    print(ele, end=" ")`
  },
  {
    id: 67,
    title: "Spacecraft Fleets",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Arrays", "Sorting", "Simulation"],
    description: `There are n spaceships at given lightyears away from the Earth and travelling to reach a distant star system at k lightyears away from Earth. You are given two integer arrays, position and speed, both of length n, where P[i] is the current distance of the ith spaceship and S[i] is the speed of the ith spaceship in lightyears per year.

As the spaceships travel toward the star system, an interesting phenomenon occurs: when a faster spaceship catches up to a slower one, it reduces its speed to match the slower spaceship's speed, forming a fleet. A fleet is a group of one or more spaceships that travel together at the same speed.

Given this information, determine the number of distinct spacecraft fleets that will arrive at the destination star system. A fleet is considered distinct if no other fleet arrives at the destination at the same time while travelling together.

Input Format:
The first line contains an integer 'n', representing the total number of spaceships.
The second line contains an integer 'k', representing the distance of the star system from Earth.
The third line contains 'n' space-separated integers denoting the current distance of the i-th spaceship from Earth.
The fourth line contains 'n' space-separated integers denoting the speed of the i-th spaceship.

Output Format:
Return the number of spacecraft fleets that will arrive at the destination.`,
    examples: [
      { input: "4\n14\n10 8 5 3\n2 4 1 3", output: "2" },
      { input: "3\n10\n6 8 2\n4 2 6", output: "2" },
      { input: "1\n100\n10\n5", output: "1" },
      { input: "3\n20\n5 10 15\n5 5 5", output: "1" },
      { input: "2\n10\n3 5\n3 1", output: "2" }
    ],
    constraints: ["1 <= n <= 10^5", "0 < k <= 10^6", "0 <= P[i] < target", "0 < S[i] <= 10"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `def count_fleets(n, k, position, speed):
    time = [(k - position[i]) / speed[i] for i in range(n)]
    ships = sorted(zip(position, time), reverse=True)
    fleets = 0
    current_time = 0
    for _, t in ships:
        if t > current_time:
            fleets += 1
            current_time = t
    return fleets

n = int(input())
k = int(input())
position = list(map(int, input().split()))
speed = list(map(int, input().split()))
print(count_fleets(n, k, position, speed))`
  },
  {
    id: 68,
    title: "Kth Character from Reversed String",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Strings", "Basics"],
    description: `One day, Jack finds a string of characters. He is very keen to arrange them in reverse order, i.e., the first characters become the last characters, the second characters become the second-last characters, and so on.

Now he wants your help to find the kth character from the new string formed after reversing the original string.

Note: String contains only lowercase Latin letters.

Input Format:
The first line contains two integers n, k — the length of the string and the value of k respectively.
The second line contains a string containing n characters.

Output Format:
Print a single line containing the kth character of the reversed string.`,
    examples: [
      { input: "5 2\nabdfa", output: "f" },
      { input: "3 1\nabc", output: "c" },
      { input: "1 1\nz", output: "z" },
      { input: "4 4\nabcd", output: "a" },
      { input: "6 3\nhello!", output: "l" }
    ],
    constraints: ["1 <= k <= n <= 10^6"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n, k = map(int, input().split())
s = input()
print(s[::-1][k-1])`
  },
  {
    id: 69,
    title: "Great Sequence for X",
    difficulty: "Hard",
    category: "TCS TAG",
    tags: ["Arrays", "Hashing", "Sorting"],
    description: `A sequence of positive integers is called "great" for a number X if we can divide it into pairs such that, for each pair, multiplying the first number by X equals the second number. More formally, a sequence A of size N is "great" for X if N is even and there exists a permutation P of size N such that for each i (1 <= i <= (N/2)), we can rearrange it so that for every pair (Ai, Aj), we have (Ai * X = Aj).

Ram has a sequence A and a number X. Help Ram make the sequence "great" by determining the minimum number of positive integers that should be added to the sequence A so that it becomes "great" for the number X.

Input Format:
The first line contains two integers N, X representing the size of the sequence and the integer X respectively.
The next line contains N space-separated integers a1, a2, ..., an, representing the elements of the sequence A.

Output Format:
Print a single integer representing the minimum number of integers that need to be appended to the end of list A in order to make it a great sequence for the number X.`,
    examples: [
      { input: "4 2\n1 2 3 6", output: "0" },
      { input: "3 3\n1 3 9", output: "1" },
      { input: "2 2\n1 2", output: "0" },
      { input: "1 5\n3", output: "1" },
      { input: "4 2\n2 2 4 4", output: "0" },
      { input: "6 3\n1 3 9 27 81 243", output: "0" }
    ],
    constraints: ["1 <= Ai <= 10^6", "1 <= N <= 2*10^6", "2 <= X <= 10^6"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n, x = map(int, input().split())
l = list(map(int, input().split()))
d = {}
for i in l:
    d[i] = d.get(i, 0) + 1
l.sort()
c = 0
if x > 1:
    for i in l:
        if d[i] > 0:
            tc = d[i]
            req = i * x
            ttc = d.get(req, 0)
            if ttc == 0:
                c += tc
                d[i] = 0
            else:
                if tc == ttc:
                    d[i] = 0
                    d[req] = 0
                elif tc > ttc:
                    c += tc - ttc
                    d[i] = 0
                    d[req] = 0
                else:
                    d[i] = 0
                    d[req] -= tc
    print(c)
elif x == 1:
    for i in d:
        if d[i] % 2 != 0:
            c += 1
    print(c)`
  },
  {
    id: 70,
    title: "2D Array to Doubly Linked List",
    difficulty: "Hard",
    category: "TCS TAG",
    tags: ["Arrays", "Simulation"],
    description: `You are provided with a 2D array (N*M). Your task is to create an ArrayList of Node objects, where each row of the 2D array corresponds to one entry in the ArrayList. After that, a doubly-linked list is constructed, arranging nodes first by even indices from the ArrayList, followed by the odd indices.

Input Format:
The first line contains an integer N, representing the size of the array row.
The second line contains an integer M, representing the size of array col.
The next N lines contain M space-separated integers each representing the array elements.

Output Format:
Return the linked list in the format: val1 <---> val2 <---> ... <---> null`,
    examples: [
      { input: "2\n3\n1 2 3\n4 5 6", output: "1 <---> 2 <---> 3 <---> 4 <---> 5 <---> 6 <---> null" },
      { input: "3\n2\n1 2\n3 4\n5 6", output: "1 <---> 2 <---> 5 <---> 6 <---> 3 <---> 4 <---> null" },
      { input: "1\n1\n42", output: "42 <---> null" },
      { input: "4\n1\n10\n20\n30\n40", output: "10 <---> 30 <---> 20 <---> 40 <---> null" },
      { input: "1\n3\n7 8 9", output: "7 <---> 8 <---> 9 <---> null" }
    ],
    constraints: ["1 <= N < 10^2", "1 <= M < 10^2"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
m = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

result = []
# Even-indexed rows first
for i in range(0, n, 2):
    for j in range(m):
        result.append(str(arr[i][j]))
# Odd-indexed rows next
for i in range(1, n, 2):
    for j in range(m):
        result.append(str(arr[i][j]))
result.append("null")
print(" <---> ".join(result))`
  },
  {
    id: 71,
    title: "Equilibrium Index of Array",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Arrays", "Math"],
    description: `Given an array A of N elements, find the equilibrium index of the array. An equilibrium index is an index such that the sum of all elements at lower indices is equal to the sum of all elements at higher indices.

If there are multiple equilibrium indices, return the first one. If no equilibrium index exists, return -1.

Note: The element at the equilibrium index is not included in either side.

Input Format:
The first line contains an integer N, the size of the array.
The second line contains N space-separated integers representing the array elements.

Output Format:
Print the equilibrium index. If none exists, print -1.`,
    examples: [
      { input: "5\n1 3 5 2 2", output: "2" },
      { input: "3\n1 2 3", output: "-1" },
      { input: "1\n0", output: "0" },
      { input: "3\n0 0 0", output: "0" },
      { input: "4\n-1 3 -4 2", output: "0" },
      { input: "5\n2 4 4 2 4", output: "2" }
    ],
    constraints: ["1 <= N <= 10^6", "-10^9 <= A[i] <= 10^9"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
total = sum(arr)
left_sum = 0
for i in range(n):
    total -= arr[i]
    if left_sum == total:
        print(i)
        exit()
    left_sum += arr[i]
print(-1)`
  },
  {
    id: 72,
    title: "Maximum Product Subarray",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Arrays", "Dynamic Programming"],
    description: `Given an integer array A of N elements, find the contiguous subarray within the array that has the largest product. Print the maximum product.

Input Format:
The first line contains an integer N.
The second line contains N space-separated integers representing the array A.

Output Format:
Print the maximum product of any contiguous subarray.`,
    examples: [
      { input: "5\n2 3 -2 4 -1", output: "48" },
      { input: "3\n-2 0 -1", output: "0" },
      { input: "1\n-5", output: "-5" },
      { input: "4\n-1 -2 -3 -4", output: "24" },
      { input: "2\n0 0", output: "0" },
      { input: "3\n2 -5 3", output: "30" }
    ],
    constraints: ["1 <= N <= 2*10^4", "-10 <= A[i] <= 10"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
max_prod = arr[0]
cur_max = arr[0]
cur_min = arr[0]
for i in range(1, n):
    if arr[i] < 0:
        cur_max, cur_min = cur_min, cur_max
    cur_max = max(arr[i], cur_max * arr[i])
    cur_min = min(arr[i], cur_min * arr[i])
    max_prod = max(max_prod, cur_max)
print(max_prod)`
  },
  {
    id: 73,
    title: "Replace All 0s with 5",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Math", "Number System"],
    description: `Given a positive integer N, replace all 0s in the number with 5 and print the modified number.

Input Format:
The first line contains a positive integer N.

Output Format:
Print the modified number after replacing all 0s with 5.`,
    examples: [
      { input: "1004", output: "1554" },
      { input: "120", output: "125" },
      { input: "0", output: "5" },
      { input: "100", output: "155" },
      { input: "12345", output: "12345" },
      { input: "10000", output: "15555" }
    ],
    constraints: ["1 <= N <= 10^9"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = input().strip()
print(n.replace('0', '5'))`
  },
  {
    id: 74,
    title: "Stock Buy and Sell - Max One Transaction",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Arrays", "Dynamic Programming"],
    description: `Given an array prices[] of length N, representing the prices of the stocks on different days. The task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Buying a stock and selling it is called one transaction.

Note: Stock must be bought before being sold.

Input Format:
The first line contains an integer N.
The second line contains N space-separated integers representing stock prices on each day.

Output Format:
Print the maximum profit. If no profit is possible, print 0.`,
    examples: [
      { input: "6\n7 1 5 3 6 4", output: "5" },
      { input: "5\n7 6 4 3 1", output: "0" },
      { input: "1\n5", output: "0" },
      { input: "2\n1 5", output: "4" },
      { input: "4\n3 3 3 3", output: "0" },
      { input: "5\n1 2 3 4 5", output: "4" }
    ],
    constraints: ["1 <= N <= 10^5", "0 <= prices[i] <= 10^4"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
prices = list(map(int, input().split()))
min_price = float('inf')
max_profit = 0
for price in prices:
    min_price = min(min_price, price)
    max_profit = max(max_profit, price - min_price)
print(max_profit)`
  },
  {
    id: 75,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "TCS TAG",
    tags: ["Arrays", "Dynamic Programming"],
    description: `Given an array arr[] of N non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input Format:
The first line contains an integer N.
The second line contains N space-separated non-negative integers representing the elevation map.

Output Format:
Print the total amount of rain water trapped.`,
    examples: [
      { input: "6\n0 1 0 2 1 0", output: "1" },
      { input: "12\n0 1 0 2 1 0 1 3 2 1 2 1", output: "6" },
      { input: "1\n5", output: "0" },
      { input: "2\n3 4", output: "0" },
      { input: "5\n5 4 3 2 1", output: "0" },
      { input: "3\n3 0 3", output: "3" }
    ],
    constraints: ["1 <= N <= 10^5", "0 <= arr[i] <= 10^3"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
if n <= 2:
    print(0)
else:
    left_max = [0] * n
    right_max = [0] * n
    left_max[0] = arr[0]
    for i in range(1, n):
        left_max[i] = max(left_max[i-1], arr[i])
    right_max[n-1] = arr[n-1]
    for i in range(n-2, -1, -1):
        right_max[i] = max(right_max[i+1], arr[i])
    water = 0
    for i in range(n):
        water += min(left_max[i], right_max[i]) - arr[i]
    print(water)`
  },
  {
    id: 76,
    title: "Non-Repeating Element in Array",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Arrays", "Hashing"],
    description: `Given an array of N integers where every element appears twice except for one element which appears only once. Find that non-repeating element.

Input Format:
The first line contains an integer N (always odd).
The second line contains N space-separated integers.

Output Format:
Print the element that appears only once.`,
    examples: [
      { input: "5\n4 2 4 3 2", output: "3" },
      { input: "7\n1 1 2 2 3 3 5", output: "5" },
      { input: "1\n42", output: "42" },
      { input: "3\n99 1 99", output: "1" },
      { input: "5\n1000000000 1000000000 7 7 999", output: "999" }
    ],
    constraints: ["1 <= N <= 10^5", "N is odd", "1 <= arr[i] <= 10^9"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
result = 0
for num in arr:
    result ^= num
print(result)`
  },
  {
    id: 77,
    title: "Count Ways to Reach Nth Stair",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Dynamic Programming", "Recursion"],
    description: `There are N stairs. A person standing at the bottom wants to reach the top. The person can climb either 1 stair or 2 stairs at a time. Count the number of ways the person can reach the top.

Input Format:
The first line contains an integer N.

Output Format:
Print the number of ways to reach the Nth stair.`,
    examples: [
      { input: "4", output: "5" },
      { input: "3", output: "3" },
      { input: "1", output: "1" },
      { input: "2", output: "2" },
      { input: "5", output: "8" },
      { input: "10", output: "89" }
    ],
    constraints: ["1 <= N <= 40"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
if n <= 1:
    print(1)
else:
    a, b = 1, 1
    for _ in range(n):
        a, b = b, a + b
    print(a)`
  },
  {
    id: 78,
    title: "Subset Sum Check",
    difficulty: "Hard",
    category: "TCS TAG",
    tags: ["Arrays", "Dynamic Programming"],
    description: `Given a set of N non-negative integers and a value sum, determine if there is a subset of the given set with sum equal to the given sum.

Input Format:
The first line contains two integers N and sum.
The second line contains N space-separated non-negative integers.

Output Format:
Print "True" if a subset with the given sum exists, otherwise print "False".`,
    examples: [
      { input: "6 9\n3 34 4 12 5 2", output: "True" },
      { input: "3 11\n1 2 3", output: "False" },
      { input: "1 0\n5", output: "True" },
      { input: "3 5\n5 10 20", output: "True" },
      { input: "2 100\n1 2", output: "False" },
      { input: "4 10\n2 3 5 7", output: "True" }
    ],
    constraints: ["1 <= N <= 200", "0 <= arr[i] <= 10^4", "0 <= sum <= 10^5"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n, target = map(int, input().split())
arr = list(map(int, input().split()))
dp = [False] * (target + 1)
dp[0] = True
for num in arr:
    for j in range(target, num - 1, -1):
        dp[j] = dp[j] or dp[j - num]
print("True" if dp[target] else "False")`
  },
  {
    id: 79,
    title: "Minimum Number of Jumps to Reach End",
    difficulty: "Hard",
    category: "TCS TAG",
    tags: ["Arrays", "Dynamic Programming"],
    description: `Given an array of N integers where each element represents the max number of steps that can be made forward from that element. Find the minimum number of jumps to reach the end of the array starting from the first element.

If an element is 0, then you cannot move through that element. If it is not possible to reach the end, print -1.

Input Format:
The first line contains an integer N.
The second line contains N space-separated integers.

Output Format:
Print the minimum number of jumps, or -1 if not possible.`,
    examples: [
      { input: "9\n1 3 5 8 9 2 6 7 6", output: "3" },
      { input: "5\n1 0 0 0 1", output: "-1" },
      { input: "1\n0", output: "0" },
      { input: "2\n0 1", output: "-1" },
      { input: "5\n2 3 1 1 4", output: "2" },
      { input: "3\n10 0 0", output: "1" }
    ],
    constraints: ["1 <= N <= 10^5", "0 <= arr[i] <= 10^5"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
if n <= 1:
    print(0)
elif arr[0] == 0:
    print(-1)
else:
    jumps = 1
    steps = arr[0]
    maxReach = arr[0]
    for i in range(1, n):
        if i == n - 1:
            print(jumps)
            exit()
        maxReach = max(maxReach, i + arr[i])
        steps -= 1
        if steps == 0:
            jumps += 1
            if i >= maxReach:
                print(-1)
                exit()
            steps = maxReach - i
    print(-1)`
  },
  {
    id: 80,
    title: "Maximum Consecutive Ones in Binary Array",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Arrays", "Basics"],
    description: `Given a binary array A of N elements (containing only 0s and 1s), find the maximum number of consecutive 1s in the array.

Input Format:
The first line contains an integer N.
The second line contains N space-separated integers (0s and 1s).

Output Format:
Print the maximum number of consecutive 1s.`,
    examples: [
      { input: "7\n1 1 0 1 1 1 0", output: "3" },
      { input: "5\n0 0 0 0 0", output: "0" },
      { input: "1\n1", output: "1" },
      { input: "1\n0", output: "0" },
      { input: "6\n1 1 1 1 1 1", output: "6" },
      { input: "4\n1 0 1 0", output: "1" }
    ],
    constraints: ["1 <= N <= 10^5", "A[i] is 0 or 1"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
max_count = 0
count = 0
for num in arr:
    if num == 1:
        count += 1
        max_count = max(max_count, count)
    else:
        count = 0
print(max_count)`
  },
  {
    id: 81,
    title: "Array is Subset of Another Array",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Arrays", "Hashing"],
    description: `Given two arrays A[] of size M and B[] of size N, the task is to check whether array B is a subset of array A or not. Both arrays are unsorted and may contain duplicates.

Input Format:
The first line contains two integers M and N, the sizes of arrays A and B respectively.
The second line contains M space-separated integers (array A).
The third line contains N space-separated integers (array B).

Output Format:
Print "Yes" if B is a subset of A, otherwise print "No".`,
    examples: [
      { input: "6 4\n11 1 13 21 3 7\n11 3 7 1", output: "Yes" },
      { input: "5 3\n1 2 3 4 5\n1 6 3", output: "No" },
      { input: "3 1\n1 2 3\n2", output: "Yes" },
      { input: "4 2\n1 2 2 3\n2 2", output: "Yes" },
      { input: "3 2\n1 2 3\n2 2", output: "No" },
      { input: "5 0\n1 2 3 4 5\n", output: "Yes" }
    ],
    constraints: ["1 <= M, N <= 10^5", "1 <= A[i], B[i] <= 10^6"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `from collections import Counter
m, n = map(int, input().split())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
count_a = Counter(a)
count_b = Counter(b)
is_subset = all(count_b[k] <= count_a.get(k, 0) for k in count_b)
print("Yes" if is_subset else "No")`
  },
  {
    id: 82,
    title: "Wildcard String Matching",
    difficulty: "Hard",
    category: "TCS TAG",
    tags: ["Strings", "Dynamic Programming"],
    description: `Given two strings where the first string may contain wildcard characters and the second string is a normal string. Write a function that returns true if the two strings match.

The following are allowed wildcard characters in the first string:
* '?' - matches any single character
* '*' - matches any sequence of characters (including the empty sequence)

Input Format:
The first line contains the pattern string (with wildcards).
The second line contains the text string.

Output Format:
Print "Yes" if the strings match, otherwise "No".`,
    examples: [
      { input: "ge?ks*\ngeeksforgeeks", output: "Yes" },
      { input: "ge?ks\ngeeks", output: "Yes" },
      { input: "*\nanything", output: "Yes" },
      { input: "?\na", output: "Yes" },
      { input: "a*b\nacb", output: "Yes" },
      { input: "a?c\nabc", output: "Yes" },
      { input: "abc\nabd", output: "No" }
    ],
    constraints: ["1 <= |pattern|, |text| <= 200"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `pattern = input().strip()
text = input().strip()
m, n = len(pattern), len(text)
dp = [[False] * (n + 1) for _ in range(m + 1)]
dp[0][0] = True
for i in range(1, m + 1):
    if pattern[i-1] == '*':
        dp[i][0] = dp[i-1][0]
for i in range(1, m + 1):
    for j in range(1, n + 1):
        if pattern[i-1] == '*':
            dp[i][j] = dp[i-1][j] or dp[i][j-1]
        elif pattern[i-1] == '?' or pattern[i-1] == text[j-1]:
            dp[i][j] = dp[i-1][j-1]
print("Yes" if dp[m][n] else "No")`
  },
  {
    id: 83,
    title: "Replace Elements by Rank in Array",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Arrays", "Sorting", "Hashing"],
    description: `Given an array of N integers, replace each element of the array with its corresponding rank. The rank of an element is defined as the distance between the element and the first element of the array when the array is arranged in ascending order. Rank of the smallest element starts with 1.

If two or more elements are equal, they should have the same rank.

Input Format:
The first line contains an integer N.
The second line contains N space-separated integers.

Output Format:
Print N space-separated integers representing the ranks.`,
    examples: [
      { input: "5\n20 15 26 2 98", output: "3 2 4 1 5" },
      { input: "4\n10 10 20 30", output: "1 1 2 3" },
      { input: "1\n5", output: "1" },
      { input: "3\n100 100 100", output: "1 1 1" },
      { input: "5\n5 4 3 2 1", output: "5 4 3 2 1" }
    ],
    constraints: ["1 <= N <= 10^5", "1 <= arr[i] <= 10^9"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
sorted_unique = sorted(set(arr))
rank_map = {v: i+1 for i, v in enumerate(sorted_unique)}
print(' '.join(str(rank_map[x]) for x in arr))`
  },
  {
    id: 84,
    title: "Sort Elements by Frequency",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Arrays", "Sorting", "Hashing"],
    description: `Given an array of integers, sort the array according to frequency of elements. Elements that have higher frequency come first. If two elements have the same frequency, then the element which appeared first in the input should come first.

Input Format:
The first line contains an integer N.
The second line contains N space-separated integers.

Output Format:
Print the array sorted by frequency.`,
    examples: [
      { input: "8\n5 2 2 8 5 6 8 8", output: "8 8 8 5 5 2 2 6" },
      { input: "6\n4 4 2 2 2 3", output: "2 2 2 4 4 3" },
      { input: "1\n7", output: "7" },
      { input: "4\n1 2 3 4", output: "1 2 3 4" },
      { input: "3\n5 5 5", output: "5 5 5" }
    ],
    constraints: ["1 <= N <= 10^5", "1 <= arr[i] <= 10^6"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `from collections import Counter
n = int(input())
arr = list(map(int, input().split()))
freq = Counter(arr)
first_occ = {}
for i, x in enumerate(arr):
    if x not in first_occ:
        first_occ[x] = i
arr.sort(key=lambda x: (-freq[x], first_occ[x]))
print(' '.join(map(str, arr)))`
  },
  {
    id: 85,
    title: "Pangram Check with Count",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Strings", "Hashing"],
    description: `Assert whether the given string has all the letters of the English alphabet or not.

If yes return "True" else return "False".

Assume the string contains nothing but lowercase English letters.

Input Format:
The string to be checked.

Output Format:
Display "True" if all the letters in English alphabets are present else display "False".

Note: Output is case-sensitive.`,
    examples: [
      { input: "thequickbrownfoxjumpsoverthelazydog", output: "True" },
      { input: "hello", output: "False" },
      { input: "abcdefghijklmnopqrstuvwxyz", output: "True" },
      { input: "a", output: "False" },
      { input: "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy", output: "False" }
    ],
    constraints: ["1 <= |S| <= 10^5"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `s = input().strip()
alphabet_set = set('abcdefghijklmnopqrstuvwxyz')
if alphabet_set.issubset(set(s)):
    print("True")
else:
    print("False")`
  },
  {
    id: 86,
    title: "Encrypt the String",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Strings", "Simulation"],
    description: `Given a string S, encrypt it by taking the count of each unique character and appending the character followed by its count. The characters should appear in the order of their first occurrence.

For example, if S = "aaabbcdddd", the encrypted form is "a3b2c1d4".

Input Format:
The first line contains the string S.

Output Format:
Print the encrypted string.`,
    examples: [
      { input: "aaabbcdddd", output: "a3b2c1d4" },
      { input: "aabccc", output: "a2b1c3" },
      { input: "a", output: "a1" },
      { input: "abcde", output: "a1b1c1d1e1" },
      { input: "zzzzz", output: "z5" },
      { input: "abab", output: "a2b2" }
    ],
    constraints: ["1 <= |S| <= 10^5", "S contains only lowercase English letters"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `s = input().strip()
from collections import OrderedDict
freq = OrderedDict()
for c in s:
    freq[c] = freq.get(c, 0) + 1
result = ''
for char, count in freq.items():
    result += char + str(count)
print(result)`
  },
  {
    id: 87,
    title: "Leap Year Check",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Math", "Basics"],
    description: `Given a year, check if it is a leap year or not.

A year is a leap year if:
- It is divisible by 4 AND
- It is NOT divisible by 100, UNLESS it is also divisible by 400.

Input Format:
The first line contains an integer representing the year.

Output Format:
Print "Leap Year" if the year is a leap year, otherwise print "Not a Leap Year".`,
    examples: [
      { input: "2000", output: "Leap Year" },
      { input: "1900", output: "Not a Leap Year" },
      { input: "2024", output: "Leap Year" },
      { input: "2023", output: "Not a Leap Year" },
      { input: "400", output: "Leap Year" },
      { input: "100", output: "Not a Leap Year" }
    ],
    constraints: ["1 <= year <= 10^4"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `year = int(input())
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("Leap Year")
else:
    print("Not a Leap Year")`
  },
  {
    id: 88,
    title: "Add Two Fractions",
    difficulty: "Easy",
    category: "TCS TAG",
    tags: ["Math", "Number System"],
    description: `Given two fractions represented as a/b and c/d, find their sum and print it in reduced (simplest) form.

Input Format:
The first line contains two space-separated integers a and b (numerator and denominator of first fraction).
The second line contains two space-separated integers c and d (numerator and denominator of second fraction).

Output Format:
Print the result fraction in the form "numerator/denominator" in reduced form.`,
    examples: [
      { input: "1 2\n3 4", output: "5/4" },
      { input: "1 3\n2 3", output: "1/1" },
      { input: "1 1\n1 1", output: "2/1" },
      { input: "1 6\n1 6", output: "1/3" },
      { input: "0 1\n0 1", output: "0/1" }
    ],
    constraints: ["1 <= a, b, c, d <= 10^4"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `from math import gcd
a, b = map(int, input().split())
c, d = map(int, input().split())
num = a * d + c * b
den = b * d
g = gcd(abs(num), abs(den))
print(f"{num // g}/{den // g}")`
  },
  {
    id: 89,
    title: "Maximum Stolen Value from Houses",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Dynamic Programming", "Arrays"],
    description: `There are N houses built in a line, each one of which contains some value in it. A thief is going to steal the maximal value in these houses, but he cannot steal in two adjacent houses because the owner of a stolen house will report to the police and the thief will get caught if he steals in the immediate next house.

Find the maximum value that the thief can steal.

Input Format:
The first line contains an integer N.
The second line contains N space-separated integers representing the value in each house.

Output Format:
Print the maximum value that can be stolen.`,
    examples: [
      { input: "5\n6 7 1 3 8", output: "15" },
      { input: "4\n5 3 4 11", output: "16" },
      { input: "1\n10", output: "10" },
      { input: "2\n5 3", output: "5" },
      { input: "3\n1 2 3", output: "4" },
      { input: "6\n2 7 9 3 1 5", output: "15" }
    ],
    constraints: ["1 <= N <= 10^5", "1 <= value[i] <= 10^4"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
if n == 1:
    print(arr[0])
elif n == 2:
    print(max(arr[0], arr[1]))
else:
    prev2 = arr[0]
    prev1 = max(arr[0], arr[1])
    for i in range(2, n):
        curr = max(prev1, prev2 + arr[i])
        prev2 = prev1
        prev1 = curr
    print(prev1)`
  },
  {
    id: 90,
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "TCS TAG",
    tags: ["Arrays", "Binary Search"],
    description: `Given a sorted array that has been rotated at some unknown pivot and a target value, write a function to search for the target in the array. If found, return its index, otherwise return -1.

You must write an algorithm with O(log n) runtime complexity.

Input Format:
The first line contains an integer N.
The second line contains N space-separated integers (the rotated sorted array).
The third line contains the target value to search for.

Output Format:
Print the index of the target if found, otherwise print -1.`,
    examples: [
      { input: "7\n4 5 6 7 0 1 2\n0", output: "4" },
      { input: "5\n3 5 1 2 3\n6", output: "-1" },
      { input: "1\n1\n1", output: "0" },
      { input: "1\n5\n3", output: "-1" },
      { input: "5\n1 2 3 4 5\n3", output: "2" },
      { input: "4\n2 3 4 1\n1", output: "3" }
    ],
    constraints: ["1 <= N <= 5000", "-10^4 <= arr[i] <= 10^4", "All values of arr are unique"],
    starterCode: {
      python: `# Enter your code here. Read input from STDIN. Print output to STDOUT
`,
      javascript: `const lines = [];
require('readline').createInterface({input: process.stdin})
  .on('line', l => lines.push(l))
  .on('close', () => {
    // Write your code here
  });`,
      c: `#include <stdio.h>
int main() {
    // Write your code here
    return 0;
}`,
      java: `import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`
    },
    solution: `n = int(input())
arr = list(map(int, input().split()))
target = int(input())
lo, hi = 0, n - 1
while lo <= hi:
    mid = (lo + hi) // 2
    if arr[mid] == target:
        print(mid)
        exit()
    if arr[lo] <= arr[mid]:
        if arr[lo] <= target < arr[mid]:
            hi = mid - 1
        else:
            lo = mid + 1
    else:
        if arr[mid] < target <= arr[hi]:
            lo = mid + 1
        else:
            hi = mid - 1
print(-1)`
  }
];

// Category metadata
const categories = [
  { name: "All Questions", icon: "📋", count: questions.length },
  { name: "TCS NQT", icon: "🎯", count: questions.filter(q => q.category === "TCS NQT").length },
  { name: "TCS Digital", icon: "💻", count: questions.filter(q => q.category === "TCS Digital").length },
  { name: "TCS CodeVita", icon: "🏆", count: questions.filter(q => q.category === "TCS CodeVita").length },
  { name: "TCS TAG", icon: "🏅", count: questions.filter(q => q.category === "TCS TAG").length }
];

// Difficulty stats
const difficultyStats = {
  Easy: questions.filter(q => q.difficulty === "Easy").length,
  Medium: questions.filter(q => q.difficulty === "Medium").length,
  Hard: questions.filter(q => q.difficulty === "Hard").length
};

// All unique tags
const allTags = [...new Set(questions.flatMap(q => q.tags))].sort();

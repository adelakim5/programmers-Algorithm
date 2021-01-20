function solution(s) {
  if (s.length === 1 || isPalindrome(s)) return s.length;
  let max = 1;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      if (j - i + 1 <= max) break;
      if (s[i] === s[j]) {
        let temp = s.slice(i, j + 1);
        if (isPalindrome(temp) && temp.length > max) max = temp.length;
      }
    }
  }
  return max;
}

function isPalindrome(s) {
  const n = s.length;
  let mid = n % 2 === 0 ? n / 2 : Math.floor(n / 2);
  if (!check(s, n, mid)) return false;
  return true;
}

function check(s, n, mid) {
  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[n - 1 - i]) return false;
  }
  return true;
}

function solution(n, s) {
  if (n > s) return [-1];
  let answer = Array(n).fill(Math.floor(s / n));
  for (let i = 0; i < s % n; i++) {
    answer[n - 1 - i]++;
  }
  return answer;
}

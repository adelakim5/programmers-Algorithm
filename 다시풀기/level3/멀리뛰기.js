function solution(n) {
  var answer = 0;
  const d = Array(n + 1).fill(0);
  d[1] = 1;
  d[2] = 2;
  for (let i = 3; i <= n; i++) {
    d[i] = (d[i - 2] + d[i - 1]) % 1234567;
  }
  answer = d[n];
  return answer;
}

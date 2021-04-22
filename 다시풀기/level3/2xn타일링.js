function solution(n) {
  var answer = 0;
  const d = Array(n + 1).fill(0);
  d[1] = 1;
  d[2] = 2;
  for (let i = 3; i <= n; i++) {
    d[i] = (d[i - 1] + d[i - 2]) % 1000000007;
  }
  answer = d[n];
  return answer;
}

// 너무 대표적인 dp 문제라서 그냥 풀이를 외운 것 같다.

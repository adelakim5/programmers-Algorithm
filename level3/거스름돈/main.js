function solution(n, money) {
  var answer = 0;
  let dp = Array(n + 1).fill(0);
  for (let m of money) {
    dp[m]++;
    for (let idx = 0; idx <= n; idx++) {
      if (idx >= m) dp[idx] += dp[idx - m];
    }
  }
  answer = dp[n];
  return answer;
}

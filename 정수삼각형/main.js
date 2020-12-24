function solution(triangle) {
  var answer = 0;
  let dp = Array(triangle.length)
    .fill()
    .map((_, i) => Array(i + 1).fill(0));
  dp[0][0] = triangle[0][0];
  if (triangle.length <= 1) return dp[0][0];
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        dp[i][j] = triangle[i][j] + dp[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(triangle[i][j] + dp[i - 1][j], triangle[i][j] + dp[i - 1][j - 1]);
      }
    }
  }
  answer = Math.max(...dp[dp.length - 1]);
  return answer;
}

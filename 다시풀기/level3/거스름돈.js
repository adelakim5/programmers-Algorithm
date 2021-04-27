function solution(n, money) {
  var answer = 0;
  const d = Array(n + 1).fill(0);
  for (let m of money) {
    d[m]++;
    for (let i = m; i <= n; i++) {
      d[i] += d[i - m];
    }
  }
  answer = d[n];
  return answer;
}

// dp는 정말 잘 잊히는 듯.. 풀이는 간단한데ㅠㅠ

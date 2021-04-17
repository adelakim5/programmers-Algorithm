function solution(n, results) {
  var answer = 0;
  const g = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
  for (let i = 1; i <= n; i++) g[i][i] = 0;
  for (let [win, lose] of results) {
    g[win][lose] = 1;
    g[lose][win] = -1;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        if (g[j][i] === 1 && g[i][k] === 1) g[j][k] = 1;
        if (g[j][i] === -1 && g[i][k] === -1) g[j][k] = -1;
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    const row = g[i].slice(1, n + 1);
    if (row.every((e) => e !== Infinity)) answer++;
  }
  return answer;
}

// 플로이드 워셜은 아직도 내게 낯선 존재인가 ..

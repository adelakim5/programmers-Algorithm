const n = 6;
const s = 4;
const a = 6;
const b = 2;
const fares = [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
];

solution(n, s, a, b, fares);

function solution(n, s, a, b, fares) {
  var answer = Infinity;
  const g = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
  for (let i = 1; i <= n; i++) {
    g[i][i] = 0;
  }
  for (let [st, en, c] of fares) {
    g[st][en] = c;
    g[en][st] = c;
  }
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (g[i][k] + g[k][j] < g[i][j]) g[i][j] = g[i][k] + g[k][j];
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    answer = Math.min(answer, g[s][i] + g[i][a] + g[i][b]);
  }
  // console.log(answer);
  return answer;
}

/*
플로이드 워셜 알고리즘
모든 정점들에 대하여 최소 비용을 구하고, 시작점에서 경유지를 거친 a와 b까지의 거리의 비용 중 가장 작은 비용을 구한다. 
다음에 풀땐 정말 유형을 잘 파악할 수 있기를🙏
*/

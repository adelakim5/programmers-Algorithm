function solution(board) {
  var answer = Infinity;
  // const d = [0, 1, 2, 3]; // 북, 동, 남, 서
  const n = board.length;
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  const visited = Array.from(Array(n), () => Array(n).fill(Array(4).fill(Infinity)));
  bfs();

  function bfs() {
    const q = [];

    visited[0][0].forEach((e, i) => {
      q.push({ x: 0, y: 0, d: i, sum: 0 });
      return 0;
    });

    while (q.length) {
      const { x, y, d, sum } = q.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (!checkBound(nx, ny)) continue;
        const diff = Math.abs(d - i);
        if (diff === 2) continue;
        let nCost = d === i ? 100 : 600;
        nCost += sum;
        if (visited[ny][nx][i] > nCost) {
          visited[ny][nx][i] = nCost;
          q.push({ x: nx, y: ny, d: i, sum: nCost });
          q.sort((a, b) => a.sum - b.sum);
        }
      }
    }
  }

  function checkBound(nx, ny) {
    if (nx >= 0 && ny >= 0 && nx < n && ny < n && !board[ny][nx]) return true;
    return false;
  }
  visited[n - 1][n - 1].sort((a, b) => a - b);
  answer = visited[n - 1][n - 1][0];
  console.log(answer);
  return answer;
}

const board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
solution(board);

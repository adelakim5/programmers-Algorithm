function solution(maps) {
  var answer = 0;
  const n = maps[0].length;
  const m = maps.length;
  const visited = Array.from(Array(m), () => Array(n).fill(false));
  let min = Infinity;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  function bfs() {
    const q = [];
    q.push({ x: 0, y: 0, count: 1 });
    visited[0][0] = true;
    while (q.length) {
      const { x, y, count } = q.shift();
      if (x === n - 1 && y === m - 1) {
        min = Math.min(min, count);
        continue;
      }
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx >= n || ny >= m || visited[ny][nx] || !maps[ny][nx]) continue;
        visited[ny][nx] = true;
        q.push({ x: nx, y: ny, count: count + 1 });
      }
    }
  }
  bfs();
  answer = min === Infinity ? -1 : min;
  return answer;
}

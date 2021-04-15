function solution(n, edge) {
  var answer = 0;
  const obj = {};
  for (let i = 0; i < edge.length; i++) {
    const [st, en] = edge[i];
    if (obj[st]) obj[st].push(en);
    if (obj[en]) obj[en].push(st);
    if (!obj[st]) obj[st] = [en];
    if (!obj[en]) obj[en] = [st];
  }
  const visited = Array(n + 1).fill(false);
  const counts = Array(n + 1).fill(0);
  function bfs() {
    const q = [];
    q.push(1);
    visited[1] = true;
    let [max, maxCnt] = [0, 0];
    while (q.length) {
      const idx = q.shift();
      if (max < counts[idx]) {
        max = counts[idx];
        maxCnt = 1;
      } else if (max === counts[idx]) maxCnt++;
      const dest = obj[idx];
      if (!dest) continue;
      for (let i = 0; i < dest.length; i++) {
        const d = dest[i];
        if (visited[d]) continue;
        visited[d] = true;
        q.push(d);
        counts[d] = counts[idx] + 1;
      }
    }
    return maxCnt;
  }
  answer = bfs();
  return answer;
}

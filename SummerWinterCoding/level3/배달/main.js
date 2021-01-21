function solution(N, road, K) {
  var answer = 0;
  let map = setRoads(road, N);
  let d = Array(N + 1).fill(Infinity);
  d[1] = 0;
  let heap = [];
  heap.push([d[1], 1]);
  while (heap.length) {
    const [val, idx] = heap.shift();
    if (d[idx] < val) continue;
    for (let i = 1; i <= N; i++) {
      if (map[idx][i] + val < d[i]) {
        d[i] = map[idx][i] + val;
        heap.push([d[i], i]);
      }
    }
    heap.sort((a, b) => a[0] - b[0]);
  }
  d = d.filter((e) => e <= K);
  answer = d.length;
  return answer;
}

function setRoads(road, N) {
  let map = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));
  for (let [a, b, c] of road) {
    if (map[a][b] > c) map[a][b] = c;
    if (map[b][a] > c) map[b][a] = c;
  }
  return map;
}

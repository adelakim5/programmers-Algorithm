function solution(n, lost, reserve) {
  const realLost = lost.filter((e) => !reserve.includes(e));
  const realReserve = reserve.filter((e) => !lost.includes(e));
  let cnt = n - realLost.length;
  const visited = Array(realLost.length).fill(false);
  for (let i = 0; i < realReserve.length; i++) {
    for (let j = 0; j < realLost.length; j++) {
      if (visited[j] || Math.abs(realLost[j] - realReserve[i]) !== 1) continue;
      visited[j] = true;
      cnt++;
      break;
    }
  }
  return cnt;
}

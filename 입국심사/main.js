function solution(n, times) {
  times.sort((a, b) => a - b);
  let min = times[0];
  let max = times[times.length - 1] * n;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    let count = 0;
    for (let time of times) {
      count += Math.floor(mid / time);
    }
    count >= n ? (max = mid - 1) : (min = mid + 1);
  }
  return min;
}

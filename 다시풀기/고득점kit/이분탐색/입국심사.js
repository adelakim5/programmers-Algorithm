function solution(n, times) {
  times.sort((a, b) => a - b);
  let [min, max] = [times[0], times[times.length - 1] * n];
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const count = times.reduce((acc, val) => acc + Math.floor(mid / val), 0);
    n <= count ? (max = mid - 1) : (min = mid + 1);
  }
  return min;
}

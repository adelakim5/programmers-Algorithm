function solution(n, times) {
  var answer = Infinity;
  times.sort((a, b) => a - b);
  let st = times[0];
  let en = times[times.length - 1] * n;
  while (st <= en) {
    let mid = Math.floor((st + en) / 2);
    const count = times.reduce((acc, val) => {
      acc += Math.floor(mid / val);
      return acc;
    }, 0);
    if (count >= n) {
      answer = Math.min(answer, mid);
      en = mid - 1;
    } else st = mid + 1;
  }
  return answer;
}

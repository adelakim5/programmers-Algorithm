function solution(n, stations, w) {
  let answer = 0;
  let [left, right] = [1, 1];
  for (let i = 0; i < stations.length; i++) {
    const curr = stations[i];
    left = curr - w - 1;
    const diff = left - right + 1;
    if (diff <= 0) {
      right = curr + w + 1;
    } else {
      const mok = Math.floor(diff / (w * 2 + 1));
      const nmg = diff % (w * 2 + 1);
      answer += mok + (nmg ? 1 : 0);
      right = curr + w + 1;
    }
    if (i === stations.length - 1) {
      const diff = n - right + 1;
      if (diff <= 0) continue;
      const mok = Math.floor(diff / (w * 2 + 1));
      const nmg = diff % (w * 2 + 1);
      answer += mok + (nmg ? 1 : 0);
    }
  }
  return answer;
}

function solution(stones, k) {
  let answer = 0;
  let st = 1;
  let en = 2000000000;
  while (st <= en) {
    let mid = Math.floor((st + en) / 2);
    if (canPass(mid, stones, k)) {
      st = mid + 1;
      answer = answer < mid ? mid : answer;
    } else en = mid - 1;
  }
  return answer;
}

function canPass(m, stones, k) {
  let cnt = 0;
  for (let num of stones) {
    num < m ? cnt++ : (cnt = 0);
    if (cnt >= k) return false;
  }
  return true;
}

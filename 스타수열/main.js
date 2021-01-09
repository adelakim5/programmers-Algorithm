function solution(a) {
  var answer = -1;
  if (a.length <= 2) {
    if (a.length <= 1) return 0;
    return 2;
  }
  let counts = count(a);
  counts.forEach((e, i) => {
    if (!e) return;
    if (e <= answer) return;
    let result = 0;
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] !== i && a[j + 1] !== i) continue;
      if (a[j] === a[j + 1]) continue;
      result++;
      j++;
    }
    answer = Math.max(answer, result);
  });
  return answer * 2;
}

function count(a) {
  let array = Array(a.length).fill(0);
  a.forEach((e) => array[e]++);
  return array;
}

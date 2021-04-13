function solution(n, costs) {
  var answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const array = [...Array(n).keys()];
  for (let i = 0; i < costs.length; i++) {
    const [st, en, w] = costs[i];
    if (array[st] === array[en] && array[st] !== -1 && array[en] !== -1) continue;
    if (array[st] === -1) array[st] = st;
    const temp = array[en];
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== -1 && array[j] === temp) array[j] = array[st];
    }
    answer += w;
    if (array.every((e) => e === array[st] && e !== -1)) break;
  }
  return answer;
}

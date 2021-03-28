function solution(priorities, location) {
  var answer = 0;
  const newArr = priorities.map((e, i) => {
    return { p: i, v: e };
  });
  while (newArr.length) {
    const curr = newArr.shift();
    const max = Math.max(...newArr.map((e) => e.v));
    if (curr.v < max) {
      newArr.push(curr);
    } else {
      answer++;
      if (curr.p === location) break;
    }
  }
  return answer;
}

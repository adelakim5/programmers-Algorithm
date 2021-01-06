function solution(gems) {
  const gemKindSize = new Set(gems).size;
  const gemMap = new Map();
  let answer = [];

  gems.forEach((gem, idx) => {
    gemMap.delete(gem);
    gemMap.set(gem, idx + 1);
    // console.log(gemMap);
    if (gemMap.size === gemKindSize) {
      answer.push(getIdx(gemMap));
    }
  });

  answer.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  console.log(answer);
  return answer[0];
}

function getIdx(map) {
  let min = Infinity;
  let max = 0;
  map.forEach((value, key) => {
    if (min > value) min = value;
    if (max < value) max = value;
  });
  return [min, max];
}

let testcase = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];
// let testcase = ["AA", "AB", "AC", "AA", "AC"]

console.log(solution(testcase));

function solution(gems) {
  const gemKindSize = new Set(gems).size;
  const gemMap = new Map();
  let answer = [];

  gems.forEach((gem, idx) => {
    gemMap.delete(gem);
    gemMap.set(gem, idx + 1);
    // console.log(gemMap);
    if (gemMap.size === gemKindSize) {
      answer.push([gemMap.values().next().value, idx + 1]);
    }
  });

  answer.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  console.log(answer);
  return answer[0];
}

let testcase = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];
// let testcase = ["AA", "AB", "AC", "AA", "AC"]

console.log(solution(testcase));

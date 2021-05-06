function solution(gems) {
  var answer = [];
  const gemsKind = new Set(gems).size;
  let map = new Map();
  for (let i = 0; i < gems.length; i++) {
    map.delete(gems[i]);
    map.set(gems[i], i);

    if (map.size === gemsKind) {
      answer.push([map.values().next().value + 1, i + 1]);
    }
  }

  answer.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) return a[0] - b[0];
    return a[1] - a[0] - (b[1] - b[0]);
  });

  console.log(answer[0]);
  return answer[0];
}

const gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];
solution(gems);

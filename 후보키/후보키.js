function solution(relation) {
  var answer = 0;
  const n = relation[0].length;
  let set = new Set();
  for (let i = n; i > 0; i--) {
    let res = [];
    pick(relation, 0, res, i, set);
  }
  set.forEach((e, i) => {
    const tempArr = e.split(" ").map((n) => +n);
    if (check(tempArr, relation)) answer++;
  });
  return answer;
}

function initSet(tempArr, relation) {
  let set = new Set();
  for (let i = 0; i < relation.length; i++) {
    let str = "";
    for (let t of tempArr) {
      str += relation[i][t] + " ";
    }
    set.add(str);
  }
  return set.size;
}

function check(tempArr, relation) {
  let isUniqueAndMin = true;
  const initSetSize = initSet(tempArr, relation);
  if (initSetSize < relation.length) return false;
  for (let i = tempArr.length - 1; i >= 0; i--) {
    let set = new Set();
    const except = tempArr[i];
    for (let j = 0; j < relation.length; j++) {
      let str = "";
      for (let k = 0; k < tempArr.length; k++) {
        if (tempArr[k] === except) continue;
        str += relation[j][tempArr[k]] + " ";
      }
      if (str !== "") set.add(str.trim());
    }
    if (set.size === relation.length) isUniqueAndMin = false;
  }
  return isUniqueAndMin;
}

function pick(relation, idx, res, size, set) {
  if (res.length === size) {
    set.add(res.join(" "));
    return;
  }
  for (let i = idx; i < relation[0].length; i++) {
    res.push(i);
    idx++;
    pick(relation, idx, res, size, set);
    res.pop();
  }
}

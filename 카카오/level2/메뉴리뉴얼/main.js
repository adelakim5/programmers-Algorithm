function solution(orders, course) {
  var answer = [];
  const totalObj = setObj(course);
  for (let [key, value] of Object.entries(totalObj)) {
    let max = { val: 0 };
    for (let order of orders) {
      if (order.length < +key) continue;
      getCombination(+key, order, [], totalObj[key], 0, max);
    }
    answer.push(...getMaxComb(totalObj[key], max.val));
  }
  return answer.sort();
}

function getMaxComb(obj, max) {
  const results = [];
  for (let [key, value] of Object.entries(obj)) {
    if (value === max && value >= 2) results.push(key);
  }
  return results;
}

function getCombination(size, order, res, obj, idx, max) {
  if (res.length === size) {
    const tempRes = res.slice();
    const comb = tempRes.sort().join("");
    if (obj[comb]) obj[comb]++;
    else obj[comb] = 1;
    if (max.val < obj[comb]) {
      max.val = obj[comb];
    }
    return;
  }
  for (let i = idx; i < order.length; i++) {
    res.push(order[i]);
    getCombination(size, order, res, obj, i + 1, max);
    res.pop();
  }
}

function setObj(course) {
  const obj = {};
  for (let c of course) {
    obj[c] = {};
  }
  return obj;
}

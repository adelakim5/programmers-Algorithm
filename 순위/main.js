let n = 5;
let results = [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
];
solution(n, results);

function solution(n, results) {
  var answer = 0;
  let map = getMap(results);
  let visit = Array(n).fill(false);
  for (let i = n - 1; i >= 0; i--) {
    map.forEach((value, key) => {
      if (value.length === i) {
        answer++;
        visit[i] = true;
      }
    });
    if (!visit[i]) break;
  }
  return answer;
}

function getMap(results) {
  let map = new Map();
  for (let result of results) {
    let [win, lose] = result;
    if (!map.has(lose)) {
      let value = [win];
      if (map.has(win)) {
        value.push(...map.get(win));
      }
      map.set(lose, value);
    } else {
      let values = map.get(lose);
      values.push(win);
      map.set(lose, values);
    }
  }
  return map;
}

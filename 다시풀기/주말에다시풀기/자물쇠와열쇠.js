const key = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
const lock = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

console.log(solution(key, lock));

// console.log(lotate(key));

function solution(key, lock) {
  var answer = false;
  const map = setMap(lock);
  const last = map.length - key.length;
  for (let i = 0; i <= last; i++) {
    for (let j = 0; j <= last; j++) {
      for (let k = 0; k < 4; k++) {
        let newMap = map.map((e) => [...e]);
        newMap = fillKey(key, newMap, [i, j]);
        if (checkLock(newMap, lock.length)) return true;
        key = lotate(key);
      }
    }
  }
  return answer;
}

function lotate(key) {
  const m = key.length;
  const result = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = m - 1; j >= 0; j--) {
      row.push(key[j][i]);
    }
    result.push(row);
  }
  return result;
}

function fillKey(key, map, start) {
  const [x, y] = start;
  const m = key.length;
  const newMap = map.map((e) => [...e]);
  for (let i = x; i < x + m; i++) {
    for (let j = y; j < y + m; j++) {
      if (newMap[i][j] === 0 && key[i - x][j - y] === 1) newMap[i][j] = 1;
      else if (newMap[i][j] === key[i - x][j - y]) newMap[i][j] = 0;
    }
  }
  return newMap;
}

function checkLock(map, n) {
  for (let i = n; i < 2 * n; i++) {
    for (let j = n; j < 2 * n; j++) {
      if (!map[i][j]) return false;
    }
  }
  return true;
}

function setMap(lock) {
  const n = lock.length;
  const map = Array.from(Array(3 * n), () => Array(3 * n).fill(0));
  for (let i = n; i < 2 * n; i++) {
    for (let j = n; j < 2 * n; j++) {
      map[i][j] = lock[i - n][j - n];
    }
  }
  return map;
}

let key = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
let lock = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
solution(key, lock);

function solution(key, lock) {
  var answer = true;
  if (count(key, "key") < lock(lock, "lock")) return false;

  return answer;
}

function count(arr, flag) {
  let cnt = 0;
  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      if (flag === "key" && arr[i][j] === 1) cnt++;
      if (flag === "lock" && arr[i][j] === 0) cnt++;
    }
  }
  return cnt;
}

function turn(lock) {
  let n = lock.length;
  let newLock = Array.from(Array(n), () => Array(n).fill(-1));
  for (let i = 0; i < n; i++) {
    let currRow = lock[i];
    for (let j = 0; j < n; j++) {
      newLock[j][n - 1 - i] = currRow[j];
    }
  }
  return newLock;
}

function move() {}

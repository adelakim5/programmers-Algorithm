function solution(key, lock) {
  var answer = false;
  const m = key.length;
  const n = lock.length;
  for (let i = 0; i <= 3 * n - m; i++) {
    for (let j = 0; j <= 3 * n - m; j++) {
      const start = [i, j];
      for (let k = 0; k < 4; k++) {
        if (fillNewLock(lock, key, m, start)) return true;
        key = lotate(key);
      }
    }
  }
  return answer;
}

function fillNewLock(lock, key, m, start) {
  const newLock = setNewLock(lock);
  const [x, y] = start;
  for (let i = x; i < x + m; i++) {
    for (let j = y; j < y + m; j++) {
      if (newLock[i][j] === 1 && key[i - x][j - y] === 1) return false;
      if (newLock[i][j] === 0 && key[i - x][j - y] === 1) newLock[i][j] = 1;
    }
  }
  return check(newLock);
}

function check(newLock) {
  const n = newLock.length / 3;
  for (let i = n; i < 2 * n; i++) {
    for (let j = n; j < 2 * n; j++) {
      if (newLock[i][j] === 0) return false;
    }
  }
  return true;
}

function lotate(key) {
  const result = [];
  for (let i = 0; i < key.length; i++) {
    const row = [];
    for (let j = key.length - 1; j >= 0; j--) {
      row.push(key[j][i]);
    }
    result.push(row);
  }
  return result;
}

function setNewLock(lock) {
  const n = lock.length;
  const newLock = Array.from(Array(3 * n), () => Array(3 * n).fill(0));
  for (let i = n; i < 2 * n; i++) {
    for (let j = n; j < 2 * n; j++) {
      newLock[i][j] = lock[i - n][j - n];
    }
  }
  return newLock;
}

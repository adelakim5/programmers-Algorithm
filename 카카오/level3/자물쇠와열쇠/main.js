// test
// let key = [
//   [0, 0, 0],
//   [1, 0, 0],
//   [0, 1, 1],
// ];
// let lock = [
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1],
// ];
// let answer = solution(key, lock);
// console.log(answer);

function solution(key, lock) {
  let [n, m] = [lock.length, key.length];
  let newLock = extendLock(lock);
  for (let cnt = 0; cnt < 4; cnt++) {
    for (let i = 0; i <= newLock.length - m; i++) {
      for (let j = 0; j <= newLock.length - m; j++) {
        const [start_i, start_j] = [i, j];
        if (start_i > n - m && start_i < n * 2 && start_j > n - m && start_j < n * 2) {
          // key가 범위안에 있으면
          let tempNewLock = cover(key, newLock, start_i, start_j); // key 덧대보기
          if (tempNewLock === -1) continue; // 덧대봤는데 아니면 pass
          if (isMatched(tempNewLock, n)) {
            // lock의 빈틈없이 잘 메꿔졌는지 확인
            return true; // 잘 메꿔지면 true
          }
        }
      }
    }
    key = turnKey(key); // 모두 안맞으면 key 회전
  }
  return false;
}

function cover(key, newLock, i_idx, j_idx) {
  // key 덧대보기
  let tempNewLock = newLock.slice().map((e) => [...e]);
  const m = key.length;
  for (let i = i_idx; i < i_idx + m; i++) {
    for (let j = j_idx; j < j_idx + m; j++) {
      if (tempNewLock[i][j] && key[i - i_idx][j - j_idx]) return -1; // 둘다 홈이면 안되니까 -1 리턴
      if (!tempNewLock[i][j] && key[i - i_idx][j - j_idx]) tempNewLock[i][j] = key[i - i_idx][j - j_idx]; // 메꾸기
    }
  }
  return tempNewLock;
}

function isMatched(tempNewLock, n) {
  // 잘 메꿔지는지 확인
  for (let i = n; i < n * 2; i++) {
    for (let j = n; j < n * 2; j++) {
      if (!tempNewLock[i][j]) return false; // lock에 빈틈 있으면 false
    }
  }
  return true; // 빈틈 없으면 true
}

function turnKey(key) {
  // key를 90도로 시계방향 회전
  let m = key.length;
  let newKey = Array.from(Array(m), () => Array(m).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      newKey[i][j] = key[m - 1 - j][i];
    }
  }
  return newKey;
}

function extendLock(lock) {
  // lock의 3배 크기로 확장하고, 가운데에 lock 배치
  let n = lock.length;
  let newLock = Array.from(Array(n * 3), () => Array(n * 3).fill(0));
  for (let i = n; i < n * 2; i++) {
    for (let j = n; j < n * 2; j++) {
      newLock[i][j] = lock[i - n][j - n];
    }
  }
  return newLock;
}

// 그래프 출력해보기 위한 함수
// function print(arr) {
//   let res = "";
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       res += arr[i][j];
//     }
//     res += "\n";
//   }
//   console.log(res);
// }

// function print_lock(tempNewLock, n) {
//   let res = "";
//   for (let i = n; i < n * 2; i++) {
//     for (let j = n; j < n * 2; j++) {
//       res += tempNewLock[i][j];
//     }
//     res += "\n";
//   }
//   console.log(res);
//   return res;
// }

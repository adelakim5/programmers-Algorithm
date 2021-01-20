// let board = ["IIIIOO", "IIIOOO", "IIIOOI", "IOOIII", "OOOIII", "OOIIII"]
// let board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];
// let board = ["AABBEE", "AAAEEE", "VAAEEV", "AABBEE", "AACCEE", "VVCCEE"];
// solution(6, 6, board);

function solution(m, n, board) {
  var answer = 0;
  board = board.map((e) => e.split(""));
  while (true) {
    let isChanged = false;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === ".") continue;
        let cnt = 0;
        let isBaaam = false;
        [board, flag, cnt] = baaam([i, j], board, isBaaam, m, n);
        if (isBaaam) {
          answer += cnt;
          isChanged = true;
        }
      }
    }
    if (!isChanged) break;
    else board = setDown(board);
  }
  return answer;
}

function setDown(board) {
  // board에서 블록 터지고 난 후 정리
  let [r, c] = [board.length, board[0].length];
  for (let i = 0; i < c; i++) {
    const dif = check(r, i, board);
    if (dif.length) {
      for (let k = dif.length - 1; k >= 0; k--) {
        // 맨 위에서 부터 내리기 위해 거꾸로 시작
        let j = dif[k].point[0];
        const difVal = dif[k].difVal;
        while (true) {
          if (j - difVal < 0) break;
          board[j][i] = board[j - difVal][i];
          board[j - difVal][i] = ".";
          j--;
        }
        board[0][i] = ".";
      }
    }
  }
  return board;
}

function check(r, c, board) {
  // 아래로 내려야 하는 블록들 체크
  let dotPoint = [];
  let dif = [];
  for (let i = r - 1; i >= 0; i--) {
    if (!dotPoint.length && board[i][c] === ".") {
      dotPoint = [i, c];
    }
    if (dotPoint.length && board[i][c] !== ".") {
      dif.push({ difVal: Math.abs(i - dotPoint[0]), point: dotPoint });
      dotPoint = [];
    }
  }
  return dif;
}

function pushArr(curr, arr, dx, dy, size, board, letter) {
  // left or right arr에 담기
  const [x, y] = curr;
  const [m, n] = size;
  for (let i = 0; i < 3; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (isInMap(nx, ny, m, n) && letter === board[nx][ny]) arr.push([nx, ny]);
  }
  return arr;
}

function pushTotal(totalArr, visit, arr, q) {
  // totalArr에 담기, visit 체크해주기, q에 넣기
  for (let i = 0; i < arr.length; i++) {
    let [x, y] = arr[i];
    if (!visit[x][y]) {
      visit[x][y] = 1;
      q.push([x, y]);
      totalArr.push([x, y]);
    }
  }
  return [totalArr, visit, q];
}

function baaam(curr, board, baaamFlag, m, n) {
  // board내 4블록 터뜨리기
  let dx = [];
  let dy = [];
  let visit = Array.from(Array(m), () => Array(n).fill(0));
  let totalArr = [];
  let q = [curr];
  while (q.length) {
    let isBaam = 0;
    let [x, y] = q.shift();
    const letter = board[x][y];
    let [leftArr, rightArr] = [[], []];
    dx = [0, 1, 1];
    dy = [1, 0, 1];
    rightArr = pushArr([x, y], rightArr, dx, dy, [m, n], board, letter); // 오른쪽 부분 몇개나 같은지
    if (rightArr.length >= 3) {
      // 오른쪽으로 4블록 만들어지면
      isBaam = 1;
      [totalArr, visit, q] = pushTotal(totalArr, visit, rightArr, q);
    }
    dx = [0, 1, 1];
    dy = [-1, 0, -1];
    leftArr = pushArr([x, y], leftArr, dx, dy, [m, n], board, letter); // 왼쪽 부분 몇개나 같은지
    if (leftArr.length >= 3) {
      // 왼쪽으로 4블록 만들어지면
      isBaam = 1;
      [totalArr, visit, q] = pushTotal(totalArr, visit, leftArr, q);
    }
    if (isBaam && !visit[x][y]) {
      // 왼/오 한쪽이라도 터졌고, 현재 블록 방문안했으면
      totalArr.push([x, y]); // 터질 블록들 저장된 배열 === totalArr로 넣기
      visit[x][y] = 1; // 방문 체크
    }
  }
  if (totalArr.length) {
    // 터질 블록들이 존재하면
    for (let total of totalArr) {
      const [r, c] = total;
      board[r][c] = "."; // 터질 블록들 터뜨리기 === board 내에서 터뜨린 블록 "." 표시 해주기
    }
    baaamFlag = true; // 터뜨렸음
  }
  return [board, baaamFlag, totalArr.length]; // 터진 board, 터뜨렸는지 여부, 터뜨린 개수 리턴
}

function isInMap(nx, ny, m, n) {
  if (nx >= 0 && ny >= 0 && nx < m && ny < n) return true;
  return false;
}

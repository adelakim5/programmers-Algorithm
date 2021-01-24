function solution(board) {
  let answer = 0;
  const newBoard = setNewBoard(board);
  const robot = { d: 2, x: 1, y: 1, time: 0 };
  answer = bfs(robot, board.length, newBoard);
  return answer;
}

function setVisit(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = { d1: false, d2: false };
    }
  }
  return arr;
}

function bfs(robot, n, newBoard) {
  let min = Infinity;
  let q = [];
  let visit = Array.from(Array(n + 2), () => Array(n + 2));
  visit = setVisit(visit, n + 2);
  q.push(robot);
  visit[robot.x][robot.y].d2 = true;
  while (q.length) {
    const { d, x, y, time } = q.shift();
    if (d === 2) {
      // 로봇이 가로
      if ((x === n && y === n) || (x === n && y + 1 === n)) {
        min = Math.min(min, time);
        continue;
      }
      if (checkUp(x, y, newBoard, d)) {
        if (!visit[x - 1][y].d2) {
          // 상
          q.push({ d, x: x - 1, y, time: time + 1 });
          visit[x - 1][y].d2 = true;
        }
        if (!visit[x - 1][y].d1) {
          // 첫번째 칸을 기준으로 반시계 회전
          q.push({ d: 1, x: x - 1, y, time: time + 1 });
          visit[x - 1][y].d1 = true;
        }
        if (!visit[x - 1][y + 1].d1) {
          // 두번째 칸을 기준으로 시계 회전
          q.push({ d: 1, x: x - 1, y: y + 1, time: time + 1 });
          visit[x - 1][y + 1].d1 = true;
        }
      }
      if (checkBottom(x, y, newBoard, d)) {
        if (!visit[x + 1][y].d2) {
          // 하
          q.push({ d, x: x + 1, y, time: time + 1 });
          visit[x + 1][y].d2 = true;
        }
        if (!visit[x][y].d1) {
          // 첫번째 칸을 기준으로 시계 회전
          q.push({ d: 1, x, y, time: time + 1 });
          visit[x][y].d1 = true;
        }
        if (!visit[x][y + 1].d1) {
          // 두번째 칸을 기준으로 반시계 회전
          q.push({ d: 1, x, y: y + 1, time: time + 1 });
          visit[x][y + 1].d1 = true;
        }
      }
      if (checkLeft(x, y, newBoard, d) && !visit[x][y - 1].d2) {
        // 좌
        q.push({ d, x, y: y - 1, time: time + 1 });
        visit[x][y - 1].d2 = true;
      }
      if (checkRight(x, y, newBoard, d) && !visit[x][y + 1].d2) {
        // 우

        q.push({ d, x, y: y + 1, time: time + 1 });
        visit[x][y + 1].d2 = true;
      }
    } else {
      // 로봇이 세로
      if ((x === n && y === n) || (x + 1 === n && y === n)) {
        min = Math.min(min, time);
        continue;
      }
      if (checkUp(x, y, newBoard, d) && !visit[x - 1][y].d1) {
        q.push({ d, x: x - 1, y, time: time + 1 });
        visit[x - 1][y].d1 = true;
      }
      if (checkBottom(x, y, newBoard, d) && !visit[x + 1][y].d1) {
        q.push({ d, x: x + 1, y, time: time + 1 });
        visit[x + 1][y].d1 = true;
      }
      if (checkLeft(x, y, newBoard, d)) {
        if (!visit[x][y - 1].d1) {
          q.push({ d, x, y: y - 1, time: time + 1 });
          visit[x][y - 1].d1 = true;
        }
        if (!visit[x][y - 1].d2) {
          // 첫번째 칸을 기준으로 시계 회전
          q.push({ d: 2, x, y: y - 1, time: time + 1 });
          visit[x][y - 1].d2 = true;
        }
        if (!visit[x + 1][y - 1].d2) {
          // 두번째 칸을 기준으로 반시계 회전
          q.push({ d: 2, x: x + 1, y: y - 1, time: time + 1 });
          visit[x + 1][y - 1].d2 = true;
        }
      }
      if (checkRight(x, y, newBoard, d)) {
        if (!visit[x][y + 1].d1) {
          // 우
          q.push({ d, x, y: y + 1, time: time + 1 });
          visit[x][y + 1].d1 = true;
        }
        if (!visit[x][y].d2) {
          // 첫째칸을 기준으로 반시계 회전
          q.push({ d: 2, x, y, time: time + 1 });
          visit[x][y].d2 = true;
        }
        if (!visit[x + 1][y].d2) {
          // 두번째 칸을 기준으로 시계 회전
          q.push({ d: 2, x: x + 1, y, time: time + 1 });
          visit[x + 1][y].d2 = true;
        }
      }
    }
  }
  return min;
}

function checkUp(x, y, board, d) {
  if (d === 2 && board[x - 1][y] === 0 && board[x - 1][y + 1] === 0) return true;
  if (d === 1 && board[x - 1][y] === 0) return true;
  return false;
}

function checkBottom(x, y, board, d) {
  if (d === 2 && board[x + 1][y] === 0 && board[x + 1][y + 1] === 0) return true;
  if (d === 1 && board[x + 2][y] === 0) return true;
  return false;
}

function checkLeft(x, y, board, d) {
  if (d === 2 && board[x][y - 1] === 0) return true;
  if (d === 1 && board[x][y - 1] === 0 && board[x + 1][y - 1] === 0) return true;
  return false;
}

function checkRight(x, y, board, d) {
  if (d === 2 && board[x][y + 2] === 0) return true;
  if (d === 1 && board[x][y + 1] === 0 && board[x + 1][y + 1] === 0) return true;
  return false;
}

function setNewBoard(board) {
  const n = board.length;
  let newBoard = Array.from(Array(n + 2), () => Array(n + 2).fill(1));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      newBoard[i][j] = board[i - 1][j - 1];
    }
  }
  return newBoard;
}

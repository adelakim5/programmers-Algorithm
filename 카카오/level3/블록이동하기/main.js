// let board = [
//   [0, 0, 0, 1, 1],
//   [0, 0, 0, 1, 0],
//   [0, 1, 0, 1, 1],
//   [1, 1, 0, 0, 1],
//   [0, 0, 0, 0, 0],
// ];

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
console.log(solution(board));

function pushToQ(visited, key, value, q, dir, currTime) {
  const [kx, ky] = key;
  const [vx, vy] = value;
  visited[`${kx} ${ky}`].push(`${vx} ${vy}`);
  q.push({ d: dir, x1: kx, y1: ky, x2: vx, y2: vy, time: currTime + 1, visited });
  return q;
}

function checkVisited(visited, key, value) {
  const [kx, ky] = key;
  const [vx, vy] = value;
  if (!visited[`${kx} ${ky}`]) return true;
  if (!visited[`${kx} ${ky}`].valueOf().some((val) => val === `${vx} ${vy}`)) return true;
  return false;
}

function solution(board) {
  const n = board.length;
  let newBoard = setBoard(board, n);
  let robot = { d: 2, x1: 1, y1: 1, x2: 1, y2: 2, time: 0, visited: {} };
  let q = [];
  let min = Infinity;
  robot.visited[`${robot.x1} ${robot.y1}`] = [`${robot.x2} ${robot.y2}`];
  q.push(robot);
  // console.log(robot.visited[`${robot.x1} ${robot.y1}`].valueOf(`${robot.x2} ${robot.y2}`));

  while (q.length) {
    const { d, x1, y1, x2, y2, time, visited } = q.shift();
    // console.log(visited[`${x1} ${y1}`] ? true : false);
    // console.log(d, x1, y1, x2, y2, time);
    // if (x1 === 5 && y1 === 3 && x2 === 5 && y2 === 4) {
    //   console.log(`hello world`);
    //   console.log(visited);
    // }

    if (x2 === n && y2 === n) {
      min = Math.min(time, min);
      continue;
    }
    if (d === 2) {
      if (!newBoard[x1 + 1][y1] && !newBoard[x2 + 1][y2]) {
        if (checkVisited(visited, [x1, y1], [x1 + 1, y1])) {
          if (!visited[`${x1} ${y1}`]) visited[`${x1} ${y1}`] = [];
          q = pushToQ(visited, [x1, y1], [x1 + 1, y1], q, 1, time);
        }
        if (checkVisited(visited, [x2, y2], [x2 + 1, y2])) {
          if (!visited[`${x2} ${y2}`]) visited[`${x2} ${y2}`] = [];
          q = pushToQ(visited, [x2, y2], [x2 + 1, y2], q, 1, time);
        }
      }
      if (!newBoard[x1 - 1][y1] && !newBoard[x2 - 1][y2]) {
        if (checkVisited(visited, [x1, y1], [x1 - 1, y1])) {
          if (!visited[`${x1} ${y1}`]) visited[`${x1} ${y1}`] = [];
          q = pushToQ(visited, [x1, y1], [x1 - 1, y1], q, 1, time);
        }
        if (checkVisited(visited, [x2, y2], [x2 - 1, y2])) {
          if (!visited[`${x2} ${y2}`]) visited[`${x2} ${y2}`] = [];
          q = pushToQ(visited, [x2, y2], [x2 - 1, y2], q, 1, time);
        }
      }
      if (!newBoard[x1][y1 - 1]) {
        if (checkVisited(visited, [x1, y1 - 1], [x1, y1])) {
          if (!visited[`${x1} ${y1 - 1}`]) visited[`${x1} ${y1 - 1}`] = [];
          q = pushToQ(visited, [x1, y1 - 1], [x1, y1], q, 2, time);
        }
      }
      if (!newBoard[x2][y2 + 1]) {
        if (checkVisited(visited, [x2, y2], [x2, y2 + 1])) {
          if (!visited[`${x2} ${y2}`]) visited[`${x2} ${y2}`] = [];
          q = pushToQ(visited, [x2, y2], [x2, y2 + 1], q, 2, time);
        }
      }
    } else {
      if (!newBoard[x1][y1 + 1] && !newBoard[x2][y2 + 1]) {
        if (checkVisited(visited, [x1, y1], [x1, y1 + 1])) {
          if (!visited[`${x1} ${y1}`]) visited[`${x1} ${y1}`] = [];
          q = pushToQ(visited, [x1, y1], [x1, y1 + 1], q, 2, time);
        }
        if (checkVisited(visited, [x2, y2], [x2, y2 + 1])) {
          if (!visited[`${x2} ${y2}`]) visited[`${x2} ${y2}`] = [];
          q = pushToQ(visited, [x2, y2], [x2, y2 + 1], q, 2, time);
        }
      }
      if (!newBoard[x1][y1 - 1] && !newBoard[x2][y2 - 1]) {
        if (checkVisited(visited, [x1, y1], [x1, y1 - 1])) {
          if (!visited[`${x1} ${y1}`]) visited[`${x1} ${y1}`] = [];
          q = pushToQ(visited, [x1, y1], [x1, y1 - 1], q, 2, time);
        }
        if (checkVisited(visited, [x2, y2], [x2, y2 - 1])) {
          if (!visited[`${x2} ${y2}`]) visited[`${x2} ${y2}`] = [];
          q = pushToQ(visited, [x2, y2], [x2, y2 - 1], q, 2, time);
        }
      }
      if (!newBoard[x1 - 1][y1]) {
        if (checkVisited(visited, [x1 - 1, y1], [x1, y1])) {
          if (!visited[`${x1 - 1} ${y1}`]) visited[`${x1 - 1} ${y1}`] = [];
          q = pushToQ(visited, [x1 - 1, y1], [x1, y1], q, 1, time);
        }
      }
      if (!newBoard[x2 + 1][y2]) {
        if (checkVisited(visited, [x2, y2], [x2 + 1, y2])) {
          if (!visited[`${x2} ${y2}`]) visited[`${x2} ${y2}`] = [];
          q = pushToQ(visited, [x2, y2], [x2 + 1, y2], q, 1, time);
        }
      }
    }
  }
  return min;
}

function setBoard(board, n) {
  let newBoard = Array.from(Array(n + 2), () => Array(n + 2).fill(1));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      newBoard[i][j] = board[i - 1][j - 1];
    }
  }
  return newBoard;
}

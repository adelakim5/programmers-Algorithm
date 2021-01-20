// testCase
// solution([
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 0],
//   [0, 0, 1, 0, 0, 0],
//   [1, 0, 0, 1, 0, 1],
//   [0, 1, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0],
// ]); // 3200

// solution([
//   [0, 0, 1, 0],
//   [0, 0, 0, 0],
//   [0, 1, 0, 1],
//   [1, 0, 0, 0],
// ]); // 2100;

// solution([
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0, 1],
//   [0, 0, 1, 0, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0, 1, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
// ]); // 3800

// solution([
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]); // 900

function solution(board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  var answer = 0;
  const n = board.length;
  let q = [];
  let visit = [];

  for (let i = 0; i < n; i++) {
    let temp2 = [];
    for (let j = 0; j < n; j++) {
      let temp = [];
      for (let k = 0; k < 4; k++) {
        temp.push(Infinity);
      }
      temp2.push(temp);
    }
    visit.push(temp2);
  }

  for (let i = 0; i < 4; i++) {
    q.push([0, 0, i, 0]);
  }

  while (q.length) {
    let [x, y, dir, cost] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (Math.abs(dir - i) === 2) continue;
      if (!check(nx, ny, board, n)) continue;
      let nCost = dir === i ? 100 : 600;
      nCost += cost;
      if (visit[nx][ny][i] > nCost) {
        visit[nx][ny][i] = nCost;
        q.push([nx, ny, i, visit[nx][ny][i]]);
        q.sort((a, b) => a[2] - b[2]);
      }
    }
  }
  visit[n - 1][n - 1].sort((a, b) => a - b);
  answer = visit[n - 1][n - 1][0];
  // console.log(answer);
  return answer;
}

function check(nx, ny, board, n) {
  if (nx >= 0 && ny >= 0 && nx < n && ny < n && !board[nx][ny]) return true;
  return false;
}

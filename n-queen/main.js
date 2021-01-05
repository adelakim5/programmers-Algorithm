function solution(n) {
  var answer = 0;
  let visit = Array(n).fill(false);
  let count = [0];
  distribute(0, [], n, visit, count);
  answer = count[0];
  return answer;
}

function distribute(currRow, cols, n, visit, count) {
  if (currRow >= n) {
    count[0]++;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!isPromising(currRow, i, visit, cols)) continue;
    cols.push({ row: currRow, col: i });
    visit[i] = true;
    distribute(currRow + 1, cols, n, visit, count);
    visit[i] = false;
    cols.pop();
  }
}

function isPromising(currRow, i, visit, cols) {
  if (visit[i]) return false;
  for (let { row, col } of cols) {
    if (Math.abs(currRow - row) === Math.abs(col - i)) return false;
  }
  return true;
}

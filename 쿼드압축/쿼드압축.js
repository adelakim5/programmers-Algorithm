let [zeroCnt, oneCnt] = [0, 0];
function solution(arr) {
  const n = arr.length;
  let visit = Array.from(Array(n), () => Array(n).fill(false));
  quadTree(n, 0, 0, n, n, visit, arr, zeroCnt, oneCnt);
  const answer = [zeroCnt, oneCnt];
  return answer;
}

function quadTree(size, startRow, startCol, endRow, endCol, visit, arr) {
  if (!visit[startRow][startCol] && isFull(startRow, startCol, endRow, endCol, arr)) {
    arr[startRow][startCol] === 0 ? zeroCnt++ : oneCnt++;
    for (let i = startRow; i < endRow; i++) {
      for (let j = startCol; j < endCol; j++) {
        visit[i][j] = true;
      }
    }
    return;
  }
  const mid = Math.floor(size / 2);
  quadTree(mid, startRow, startCol, startRow + mid, startCol + mid, visit, arr);
  quadTree(mid, startRow, startCol + mid, startRow + mid, endCol, visit, arr);
  quadTree(mid, startRow + mid, startCol, endRow, startCol + mid, visit, arr);
  quadTree(mid, startRow + mid, startCol + mid, endRow, endCol, visit, arr);
}

function isFull(startRow, startCol, endRow, endCol, arr) {
  let number = arr[startRow][startCol];
  for (let i = startRow; i < endRow; i++) {
    for (let j = startCol; j < endCol; j++) {
      if (number !== arr[i][j]) return false;
    }
  }
  return true;
}

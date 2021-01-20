function solution(board, moves) {
  var answer = 0;
  const n = board.length;
  let stack = [];
  for (const move of moves) {
    for (let i = 0; i < n; i++) {
      if (board[i][move - 1]) {
        if (stack[stack.length - 1] === board[i][move - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(board[i][move - 1]);
        board[i][move - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

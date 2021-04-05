function solution(numbers, target) {
  var answer = 0;

  function dfs(idx, result) {
    if (idx === numbers.length) {
      answer += target === result ? 1 : 0;
      return;
    }
    dfs(idx + 1, result + numbers[idx] * -1);
    dfs(idx + 1, result + numbers[idx]);
  }

  dfs(0, 0);

  return answer;
}

function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);
  let st = 0;
  for (let i = 0; i < A.length; i++) {
    const curr = A[i];
    if (curr < B[st]) {
      answer++;
      st++;
    }
  }
  return answer;
}

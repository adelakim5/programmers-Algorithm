function solution(number, k) {
  var answer = [];
  let tempK = k;
  let idx = 0;

  answer.push(number[idx++]);
  while (idx < number.length || answer.length < number.length - k) {
    if (tempK && answer[answer.length - 1] < number[idx]) {
      tempK--;
      answer.pop();
    } else {
      answer.push(number[idx++]);
    }
  }
  return answer.slice(0, number.length - k).join("");
}

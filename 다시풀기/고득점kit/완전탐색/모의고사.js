function solution(answers) {
  var answer = [];
  const one = { r: [1, 2, 3, 4, 5], s: 0, i: 1 };
  const two = { r: [2, 1, 2, 3, 2, 4, 2, 5], s: 0, i: 2 };
  const three = { r: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], s: 0, i: 3 };
  let max = 0;
  answers.forEach((answer, index) => {
    if (one.r[index % 5] === answer) one.s++;
    if (two.r[index % 8] === answer) two.s++;
    if (three.r[index % 10] === answer) three.s++;
    max = Math.max(one.s, two.s, three.s);
  });
  answer = [one, two, three]
    .filter((e) => e.s === max)
    .map((e) => e.i)
    .sort((a, b) => a - b);
  return answer;
}

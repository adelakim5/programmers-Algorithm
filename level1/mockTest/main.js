function solution(answers) {
  var answer = [];
  const people = [0, 0, 0];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    if (answer === p1[i % p1.length]) people[0]++;
    if (answer === p2[i % p2.length]) people[1]++;
    if (answer === p3[i % p3.length]) people[2]++;
  }
  return sort(people, answer);
}

function sort(people, answer) {
  const max = Math.max(...people);
  for (let i = 0; i < 3; i++) {
    if (people[i] >= max) answer.push(i + 1);
  }
  return answer;
}

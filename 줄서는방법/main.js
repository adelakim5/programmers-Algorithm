function solution(n, k) {
  var answer = [];
  let size = n;
  let len = factorial(n) / n;
  k--;
  let people = Array(n)
    .fill(0)
    .map((e, i) => i + 1);
  while (answer.length < size) {
    let idx = Math.floor(k / len);
    k = k % len;
    answer.push(people[idx]);
    people.splice(idx, 1);
    len = factorial(n - 1) / (n - 1);
    n--;
  }
  return answer;
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

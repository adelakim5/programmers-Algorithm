let n = 3;
console.log(solution(n));

function solution(n) {
  return hanoi(n, 1, 3, 2, []);
}

function move(n, start, to) {
  //   console.log(`move, n: ${n}, [${start}, ${to}]`);
  return [start, to];
}

function hanoi(n, start, to, via, answer) {
  //   console.log(`n: ${n}, start: ${start}, to: ${to}, via: ${via}`);
  if (n === 1) answer.push(move(1, start, to));
  else {
    hanoi(n - 1, start, via, to, answer);
    answer.push(move(n, start, to));
    hanoi(n - 1, via, to, start, answer);
  }
  return answer;
}

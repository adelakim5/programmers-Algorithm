function solution(N, number) {
  const d = Array.from(Array(9), () => new Set());
  for (let i = 1; i < 9; i++) {
    d[i].add(Number(N.toString().repeat(i)));
    for (let j = 1; j < i; j++) {
      for (let a1 of d[j]) {
        for (let a2 of d[i - j]) {
          d[i].add(a1 + a2);
          d[i].add(a1 - a2);
          d[i].add(a1 * a2);
          d[i].add(Math.floor(a1 / a2));
        }
      }
    }
    if (d[i].has(number)) return i;
  }
  return -1;
}

console.log(solution(5, 12));

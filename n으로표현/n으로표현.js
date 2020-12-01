function solution(N, number) {
  let set = Array.from(Array(8), () => new Set());
  for (let i = 0; i < 8; i++) {
    set[i].add(+N.toString().repeat(i + 1));
    for (let j = 0; j < i; j++) {
      for (let arg1 of set[j]) {
        for (let arg2 of set[i - j - 1]) {
          set[i].add(arg1 + arg2);
          set[i].add(arg1 - arg2);
          set[i].add(arg1 * arg2);
          set[i].add(arg1 / arg2);
        }
      }
    }
    if (set[i].has(number)) return i + 1;
  }
  return -1;
}

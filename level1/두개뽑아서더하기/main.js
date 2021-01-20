function solution(numbers) {
  return [
    ...numbers.reduce((acc, val, idx) => {
      const number = numbers[idx];
      for (let i = idx + 1; i < numbers.length; i++) {
        acc.add(number + numbers[i]);
      }
      return acc;
    }, new Set()),
  ].sort((a, b) => a - b);
}

function solution(numbers) {
  var answer = [];
  const obj = {};
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const value = numbers[i] + numbers[j];
      if (!obj[value]) obj[value] = value;
    }
  }
  answer = Object.entries(obj)
    .sort((a, b) => a[1] - b[1])
    .reduce((acc, val) => {
      acc.push(val[1]);
      return acc;
    }, []);
  return answer;
}

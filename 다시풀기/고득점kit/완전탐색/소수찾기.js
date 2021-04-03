// test
solution("011");

function solution(numbers) {
  var answer = 0;
  const result = new Set();
  for (let size = 1; size <= numbers.length; size++) {
    const visited = Array(numbers.length).fill(false);
    findPrime(size, numbers, [], result, visited);
  }
  answer = result.size;
  return answer;
}

function isPrime(number) {
  const nonPrime = [0, 1];
  if (nonPrime.includes(number)) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function findPrime(size, nums, res, result, visited) {
  if (res.length === size) {
    const temp = Number(res.join(""));
    if (isPrime(temp)) result.add(temp);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;
    res.push(nums[i]);
    visited[i] = true;
    findPrime(size, nums, res, result, visited);
    res.pop();
    visited[i] = false;
  }
}

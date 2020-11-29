function solution(n, t, m, p) {
  var answer = "";
  let i = 0;
  let nums = [];
  while (answer.length < t) {
    let numbers = i.toString(n).toUpperCase().split("");
    nums.push(...numbers);
    if (nums[p - 1] !== undefined) {
      answer += nums[p - 1];
      p += m;
    }
    i++;
  }
  return answer;
}

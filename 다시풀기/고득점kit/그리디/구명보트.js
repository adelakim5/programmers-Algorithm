function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);
  const visited = Array(people.length).fill(false);
  let right = people.length - 1;
  for (let i = 0; i < people.length; i++) {
    if (visited[i]) break;
    if (people[i] + people[right] <= limit) {
      visited[right] = true;
      right--;
    }
    visited[i] = true;
    answer++;
  }
  return answer;
}

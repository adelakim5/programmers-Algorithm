function solution(new_id) {
  var answer = "";
  answer = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, "")
    .replace(/\.\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/\.$/g, "");
  answer = answer.padEnd(3, answer[answer.length - 1]);
  return answer;
}

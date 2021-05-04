function solution(record) {
  var answer = [];
  const db = {};
  for (let i = 0; i < record.length; i++) {
    const log = record[i].split(" ");
    if (log[0] === "Enter" || log[0] === "Change") {
      db[log[1]] = log[2];
    }
  }

  for (let i = 0; i < record.length; i++) {
    const log = record[i].split(" ");
    if (log[0] === "Enter") {
      answer.push(`${db[log[1]]}님이 들어왔습니다.`);
    } else if (log[0] === "Leave") {
      answer.push(`${db[log[1]]}님이 나갔습니다.`);
    }
  }
  return answer;
}

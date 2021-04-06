function solution(tickets) {
  var answer = [];
  const starts = filter(tickets);
  const visited = Array(tickets.length).fill(false);
  function dfs(curr, visitedCnt, res) {
    if (visitedCnt >= tickets.length) {
      res = !answer.length ? res : check(answer, res);
      answer = res.slice();
      return;
    }
    for (let i = 0; i < tickets.length; i++) {
      if (visited[i] || tickets[i][0] !== curr) continue;
      visited[i] = true;
      res.push(tickets[i][1]);
      dfs(tickets[i][1], visitedCnt + 1, res);
      visited[i] = false;
      res.pop();
    }
  }
  starts.forEach((item) => {
    const { idx, val } = item;
    const next = val[1];
    visited[idx] = true;
    dfs(next, 1, ["ICN", next]);
    visited[idx] = false;
  });
  return answer;
}

function check(answer, res) {
  for (let i = 0; i < answer.length; i++) {
    if (res[i] === answer[i]) continue;
    if (res[i][0] < answer[i][0]) return res;
    else if (answer[i][0] < res[i][0]) return answer;
    else {
      if (res[i][1] < answer[i][1]) return res;
      if (res[i][1] > answer[i][1]) return answer;
      else {
        if (res[i][2] < answer[i][2]) return res;
        if (res[i][2] > answer[i][2]) return answer;
      }
    }
  }
  return answer;
}

function filter(tickets) {
  return tickets.reduce((acc, val, idx) => {
    if (val[0] === "ICN") acc.push({ idx, val });
    return acc;
  }, []);
}

// 좀 더럽게 통과한 것 같다.

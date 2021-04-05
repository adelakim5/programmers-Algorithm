function solution(n, computers) {
  var answer = 0;
  const visited = Array(n).fill(false);

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      bfs(i, computers[i]);
      answer++;
    }
  }

  function bfs(idx, start) {
    const q = [{ idx, currCom: start }];
    visited[idx] = true;
    while (q.length) {
      const { idx, currCom } = q.shift();
      for (let i = 0; i < currCom.length; i++) {
        if (i !== idx && currCom[i] && !visited[i]) {
          visited[i] = true;
          q.push({ idx: i, currCom: computers[i] });
        }
      }
    }
  }
  return answer;
}

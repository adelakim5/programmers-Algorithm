function solution(begin, target, words) {
  // dfs version
  var answer = 0;
  if (!words.includes(target)) return 0;
  const visited = Array(words.length).fill(false);
  let min = Infinity;
  function dfs(currWord, cnt) {
    if (currWord === target) {
      min = Math.min(cnt, min);
      return;
    }
    for (let i = 0; i < words.length; i++) {
      if (visited[i] || !check(currWord, words[i])) continue;
      visited[i] = true;
      dfs(words[i], cnt + 1);
      visited[i] = false;
    }
  }
  dfs(begin, 0);
  answer = min === Infinity ? 0 : min;
  return answer;
}

function solution(begin, target, words) {
  // bfs version
  var answer = 0;
  if (!words.includes(target)) return 0;
  const visited = Array(words.length).fill(false);
  let min = Infinity;
  function bfs() {
    const q = [{ word: begin, cnt: 0 }];
    while (q.length) {
      const { word, cnt } = q.shift();
      if (target === word) {
        min = Math.min(min, cnt);
        continue;
      }
      for (let i = 0; i < words.length; i++) {
        if (visited[i] || !check(words[i], word)) continue;
        q.push({ word: words[i], cnt: cnt + 1 });
        visited[i] = true;
      }
    }
    return min === Infinity ? 0 : min;
  }
  answer = bfs();
  return answer;
}

function check(a, b) {
  // notice: "aaa" vs "aab"
  let cnt = 0;
  for (let i = 0; i < a.length; i++) {
    cnt += a[i] !== b[i] ? 1 : 0;
  }
  return cnt === 1 ? true : false;
}

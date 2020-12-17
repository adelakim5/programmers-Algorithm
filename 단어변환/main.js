let begin = "hit";
let target = "cog";
let words = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(solution(begin, target, words));

function solution(begin, target, words) {
  let q = [];
  let visit = Array(words.length).fill(false);
  q.push({ begin, cnt: 0 });
  while (q.length) {
    const { begin, cnt } = q.shift();
    if (begin === target) return cnt;
    for (let i = 0; i < words.length; i++) {
      if (canBeNextBegin(begin, words[i]) && !visit[i]) {
        q.push({ begin: words[i], cnt: cnt + 1 });
        visit[i] = true;
      }
    }
  }
  return 0;
}

function canBeNextBegin(begin, word) {
  let cnt = 0;
  for (let i = 0; i < begin.length; i++) {
    if (word[i] === begin[i]) cnt++;
  }
  if (cnt === begin.length - 1) return true;
  return false;
}

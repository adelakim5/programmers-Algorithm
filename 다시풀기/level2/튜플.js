function solution(s) {
  var answer = [];
  const set = new Set();
  let stack = [];
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") continue;
    if (s[i] === ",") {
      stack.push(+str);
      str = "";
    } else if (s[i] === "}") {
      if (str.length) stack.push(+str);
      str = "";
      if (stack.length) answer.push(stack);
      stack = [];
    } else {
      str += s[i];
    }
  }
  answer = answer.sort((a, b) => {
    if (a.length === b.length) return a[0] - b[0];
    return a.length - b.length;
  });
  for (let i = 0; i < answer.length; i++) {
    const tuple = answer[i].filter((e) => e > 0);
    tuple.forEach((e) => set.add(e));
    // set.add(...tuple) 이렇게 하면 안됨. set은 add로 인자 하나만 받기 때문
  }
  answer = [...set];
  return answer;
}

function solution(p) {
  if (p === "") return "";

  let [u, v] = separate(p);

  if (isRight(u)) {
    return u + solution(v);
  } else {
    return "(" + solution(v) + ")" + turnSide(u);
  }
}

function turnSide(u) {
  let result = u
    .slice(1, u.length - 1)
    .split("")
    .map((e) => {
      if (e === "(") return ")";
      return "(";
    });
  return result.join("");
}

function separate(p) {
  let openCnt = 0;
  let closeCnt = 0;
  let u = "";
  let v = "";
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") openCnt++;
    else closeCnt++;
    u += p[i];
    if (openCnt === closeCnt) {
      v = p.slice(i + 1, p.length);
      break;
    }
  }
  return [u, v];
}

function isRight(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length - 1] === "(" && str[i] === ")") stack.pop();
    else stack.push(str[i]);
  }

  if (stack.length) return false;
  return true;
}

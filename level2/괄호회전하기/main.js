function solution(s) {
  var answer = 0;
  const arr = [...s];
  const opens = ["[", "{", "("];
  for (let j = 0; j < arr.length; j++) {
    const stack = arr.reduce((acc, val) => {
      if (opens.includes(val)) acc.push(val);
      else {
        const lastB = acc[acc.length - 1];
        if (val === "}" && lastB === "{") acc.pop();
        else if (val === ")" && lastB === "(") acc.pop();
        else if (val === "]" && lastB === "[") acc.pop();
        else acc.push(val);
      }
      return acc;
    }, []);
    if (!stack.length) answer++;
    const temp = arr.shift();
    arr.push(temp);
  }
  return answer;
}

function solution(expression) {
  var answer = 0;
  const methods = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  let newExpression = [];
  let stack = [];
  for (let i = 0; i < expression.length; i++) {
    const e = expression[i];
    if (e !== "*" && e !== "-" && e !== "+") stack.push(e);
    else {
      newExpression.push(Number(stack.join("")), e);
      stack = [];
    }
    if (i === expression.length - 1) {
      newExpression.push(Number(stack.join("")));
      stack = [];
    }
  }

  for (let i = 0; i < 6; i++) {
    const method = methods[i];
    let currExpression = [...newExpression];
    for (let j = 0; j < 3; j++) {
      const currOp = method[j];
      for (let k = 0; k < currExpression.length; ) {
        if (typeof currExpression[k] === "number" || currExpression[k] !== currOp) {
          stack.push(currExpression[k]);
          k++;
        } else {
          const prev = stack.pop();
          const next = currExpression[k + 1];
          const res = calculate(prev, next, currOp);
          stack.push(res);
          k += 2;
        }
      }
      currExpression = [...stack];
      stack = [];
      if (currExpression.length <= 1) {
        answer = Math.max(answer, Math.abs(currExpression[0]));
        break;
      }
    }
  }
  return answer;
}

function calculate(num1, num2, op) {
  if (op === "+") return num1 + num2;
  if (op === "-") return num1 - num2;
  if (op === "*") return num1 * num2;
}

const expression = "100-200*300-500+20";
solution(expression);

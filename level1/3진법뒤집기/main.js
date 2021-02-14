function solution(n) {
  var answer = 0;
  let newN = n
    .toString(3)
    .split("")
    .map((e) => +e);
  answer = decimal(newN);
  return answer;
}

function decimal(newN) {
  return newN.reduce((acc, val, index) => {
    const num = 3 ** index;
    acc += val * num;
    return acc;
  }, 0);
}

// 한줄짜리로도 가능
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}

function solution(n, k, cmd) {
  // 정확성 잡고 효율성은 반만 잡은 사례 => 배열은 오래 걸림
  var answer = "";

  const arr = Array(n).fill(1);
  let selected = k;

  const stack = [];

  for (let command of cmd) {
    const [letter, num] = command.split(" ");
    const number = Number(num);
    const param = { arr, selected, number };
    if (letter === "U") {
      selected = getUpSelected(param);
    } else if (letter === "D") {
      selected = getDownSelected(param);
    } else if (letter === "C") {
      stack.push(selected);
      arr[selected] = 0;
      if (isLast(selected, arr)) selected = getFrontSelected(selected, arr);
      else selected = getNextSelected(selected, arr);
    } else {
      const last = stack.pop();
      arr[last] = 1;
    }
  }

  for (let value of arr) {
    if (value === 1) answer += "O";
    else answer += "X";
  }

  return answer;
}

function isLast(selected, arr) {
  for (let i = selected + 1; i < arr.length; i++) {
    if (arr[i] === 1) return false;
  }
  return true;
}

function getNextSelected(selected, arr) {
  for (let i = selected + 1; i < arr.length; i++) {
    if (arr[i] === 1) return i;
  }
}

function getFrontSelected(selected, arr) {
  for (let i = selected - 1; i >= 0; i--) {
    if (arr[i] === 1) return i;
  }
}

function getUpSelected({ arr, selected, number }) {
  let cnt = 0;
  for (let i = selected - 1; i >= 0; i--) {
    if (arr[i] === 1) cnt++;
    if (cnt === number) return i;
  }

  return selected;
}

function getDownSelected({ arr, selected, number }) {
  let cnt = 0;
  for (let i = selected + 1; i < arr.length; i++) {
    if (arr[i] === 1) cnt++;
    if (cnt === number) return i;
  }

  return selected;
}

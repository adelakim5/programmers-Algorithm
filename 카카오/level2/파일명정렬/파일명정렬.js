function solution(files) {
  let answer = [];
  let newFiles = setSequence(files);
  newFiles
    .sort((a, b) => {
      let tempA = a.head.toUpperCase();
      let tempB = b.head.toUpperCase();
      if (tempA > tempB) return 1;
      if (tempA < tempB) return -1;
      if (tempA === tempB) {
        if (a.num > b.num) return 1;
        if (a.num < b.num) return -1;
        if (a.num === b.num) return a.idx - b.idx;
      }
    })
    .forEach((e) => answer.push(e.file));
  return answer;
}

function isNumber(str) {
  if (str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57) return true;
  return false;
}

function divideHeadAndNum(file) {
  let head = "";
  let num = "";
  for (let i = 0; i < file.length; i++) {
    let currStr = file[i];
    if (!num.length && !isNumber(currStr)) head += currStr;
    else if (num.length <= 5 && !isNumber(currStr)) break;
    else if (isNumber(currStr)) num += currStr;
    if (num.length > 5) {
      head += num;
      num = "";
    }
  }
  return [head, +num];
}

function setSequence(files) {
  let results = [];
  for (let file of files) {
    let [head, num] = divideHeadAndNum(file);
    results.push({ head, num, idx: results.length, file });
  }
  return results;
}

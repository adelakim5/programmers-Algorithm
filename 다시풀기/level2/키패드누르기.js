function solution(numbers, hand) {
  var answer = "";
  const leftNums = [1, 4, 7];
  const rightNums = [3, 6, 9];
  let currentLeft = 10;
  let currentRight = 12;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) numbers[i] = 11;
    if (leftNums.includes(numbers[i])) {
      answer += "L";
      currentLeft = numbers[i];
    } else if (rightNums.includes(numbers[i])) {
      answer += "R";
      currentRight = numbers[i];
    } else {
      let leftDiff = Math.abs(numbers[i] - currentLeft);
      let rightDiff = Math.abs(numbers[i] - currentRight);
      leftDiff = adjust(leftDiff);
      rightDiff = adjust(rightDiff);
      if (leftDiff === rightDiff) {
        if (hand === "right") {
          answer += "R";
          currentRight = numbers[i];
        } else {
          answer += "L";
          currentLeft = numbers[i];
        }
      } else if (leftDiff > rightDiff) {
        answer += "R";
        currentRight = numbers[i];
      } else {
        answer += "L";
        currentLeft = numbers[i];
      }
    }
  }
  return answer;
}

function adjust(diff) {
  if (diff % 3 === 0) diff /= 3;
  if (diff === 5 || diff === 7) diff = 3;
  if (diff === 4) diff = 2;
  if (diff === 10 || diff === 8) diff = 4;
  return diff;
}

// 예전에 풀었을 때와 풀이가 똑같넹...

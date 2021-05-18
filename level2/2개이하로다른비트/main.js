function solution(numbers) {
  const answer = [];

  for (let number of numbers) {
    if (number % 2 === 0) answer.push(number + 1);
    else {
      const bin = [...number.toString(2)];
      if (bin.every((e) => e === "1")) {
        bin[0] = "10";
      } else {
        for (let i = bin.length - 1; i >= 0; i--) {
          if (bin[i] === "0") {
            bin[i] = "1";
            bin[i + 1] = "0";
            break;
          }
        }
      }
      answer.push(parseInt(bin.join(""), 2));
    }
  }
  return answer;
}

// 비트 연산하는 문제가 얼마나 자주 많이 나올까 싶다마는
// 나에겐 넘 어려웠답.. ㅜ
// 무턱대고 완탐하려고 하기 보다는 규칙을 찾아보자! 마치 문자열처럼..

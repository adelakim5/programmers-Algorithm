function solution(progresses, speeds) {
  var answer = [0];
  const results = progresses.map((e, i) => {
    const remain = 100 - e;
    return Math.ceil(remain / speeds[i]);
  });
  let lastValue = results[0];
  results.forEach((val) => {
    if (lastValue >= val) answer[answer.length - 1]++;
    else {
      answer.push(1);
      lastValue = val;
    }
  });
  return answer;
}

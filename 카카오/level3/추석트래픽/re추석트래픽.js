// solution([
//   "2016-09-15 20:59:57.421 0.351s",
//   "2016-09-15 20:59:58.233 1.181s",
//   "2016-09-15 20:59:58.299 0.8s",
//   "2016-09-15 20:59:58.688 1.041s",
//   "2016-09-15 20:59:59.591 1.412s",
//   "2016-09-15 21:00:00.464 1.466s",
//   "2016-09-15 21:00:00.741 1.581s",
//   "2016-09-15 21:00:00.748 2.31s",
//   "2016-09-15 21:00:00.966 0.381s",
//   "2016-09-15 21:00:02.066 2.62s",
// ]);
solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"]);

function solution(lines) {
  var answer = 0;
  let res = setStartEndTime(lines);
  console.log(res);
  for (let i = 0; i < res.length; i++) {
    const startBound = res[i].end;
    const endBound = lastTimeOfOneSec(startBound);
    let cnt = count(startBound, endBound, res);
    if (answer < cnt) answer = cnt;
  }
  console.log(answer);
  return answer;
}

function count(startBound, endBound, res) {
  let count = 0;
  for (let i = 0; i < res.length; i++) {
    const startPoint = res[i].start;
    const endPoint = res[i].end;
    if (isInBound(startBound, endBound, startPoint, endPoint)) count++;
  }
  return count;
}

function isInBound(startBound, endBound, startPoint, endPoint) {
  if (startPoint <= startBound && endPoint >= startBound) return true;
  if (startPoint <= startBound && endPoint >= endBound) return true;
  if (startPoint >= startBound && endPoint <= endBound) return true;
  if (startPoint <= endBound && endPoint >= endBound) return true;
  return false;
}

function lastTimeOfOneSec(timeSum) {
  let result = (timeSum + 1 - 0.001).toFixed(3);
  return +result;
}

function setStartEndTime(lines) {
  let res = [];
  for (let line of lines) {
    res.push(getStartWithTimeSum(line));
  }
  return res;
}

function getStartWithTimeSum(line) {
  let [date, time, runtime] = line.split(" ");
  runtime = Number(runtime.slice(0, runtime.length - 1));
  console.log(runtime);
  let [h, m, d] = time.split(":").map((e) => +e);
  let timeSum = (h * 60 * 60 + m * 60 + d).toFixed(3);
  timeSum = +timeSum;
  let startTimeSum = (timeSum - runtime + 0.001).toFixed(3);
  startTimeSum = +startTimeSum;
  console.log(`start: ${startTimeSum}, end: ${timeSum}`);
  return { start: startTimeSum, end: timeSum };
}

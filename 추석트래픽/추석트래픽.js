// solution(["2016-09-15 00:00:00.000 3s"]);
// solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"]);
solution([
  "2016-09-15 20:59:57.421 0.351s",
  "2016-09-15 20:59:58.233 1.181s",
  "2016-09-15 20:59:58.299 0.8s",
  "2016-09-15 20:59:58.688 1.041s",
  "2016-09-15 20:59:59.591 1.412s",
  "2016-09-15 21:00:00.464 1.466s",
  "2016-09-15 21:00:00.741 1.581s",
  "2016-09-15 21:00:00.748 2.31s",
  "2016-09-15 21:00:00.966 0.381s",
  "2016-09-15 21:00:02.066 2.62s",
]);

function solution(lines) {
  var answer = 0;
  if (lines.length === 1) return 1;
  let res = gatherStartAndEnd(lines);
  console.log(res);
  let i = 0;
  while (i < res.length) {
    let [h, m, s] = res[i].end.split(":").map((e) => +e);
    let [lastH, lastM, lastS] = getLastOfOneSec([h, m, s]);
    // console.log(`h: ${h}, m: ${m}, s: ${s}`);
    // console.log(`lastH: ${lastH}, lastM: ${lastM}, lastS: ${lastS}`);
    let cnt = count(res, [h, m, s], [lastH, lastM, lastS]);
    if (answer < cnt) answer = cnt;
    i++;
  }
  //   console.log(`answer: ${answer}`);
  return answer;
}

function getLastOfOneSec(start) {
  let [h, m, s] = start;
  s = (s + 1 - 0.001).toFixed(3);
  s = +s;
  if (s > 60) {
    m++;
    s = (s - 60).toFixed(3);
    if (m > 60) {
      h++;
      m -= 60;
    }
  }
  s = +s;
  return [h, m, s];
}

function count(res, first, last) {
  let count = 0;
  for (let i = 0; i < res.length; i++) {
    let [sh, sm, ss] = res[i].start.split(":").map((e) => +e);
    let [eh, em, es] = res[i].end.split(":").map((e) => +e);
    if (isInBoundary([sh, sm, ss], [eh, em, es], first, last)) {
      count++;
      //   console.log(`index: ${i}`);
    }
  }
  //   console.log(`count: ${count}`);
  return count;
}

function isInBoundary(s, e, first, last) {
  let [sh, sm, ss] = s;
  let sSum = sh * 60 * 60 + sm * 60 + Number(ss.toFixed(3));
  let [eh, em, es] = e;
  let eSum = eh * 60 * 60 + em * 60 + Number(es.toFixed(3));
  let [startH, startM, startS] = first;
  let startSum = startH * 60 * 60 + startM * 60 + Number(startS.toFixed(3));
  let [endH, endM, endS] = last;
  //   console.log(`endS: ${endS}`);
  let endSum = endH * 60 * 60 + endM * 60 + Number(endS.toFixed(3));
  if (sSum <= startSum && eSum >= startSum) return true;
  if (sSum <= startSum && eSum >= endSum) return true;
  if (sSum <= endSum && eSum >= endSum) return true;
  if (sSum >= startSum && eSum <= endSum) return true;
  return false;
}

function gatherStartAndEnd(lines) {
  let res = [];
  for (let line of lines) {
    let [sDate, sTime, sRuntime] = getStart(line);
    let [date, time, runtime] = line.split(" ");
    res.push({ start: sTime, end: time });
  }
  return res;
}

function getStart(line) {
  let [date, time, runtime] = line.split(" ");
  runtime = Number(runtime.slice(0, runtime.length - 1));
  let [h, m, s] = time.split(":").map((e) => +e);
  if (h === 0 && m === 0 && s < runtime) return [date, "00:00:00", runtime];
  if (s < runtime) {
    if (m <= 0) {
      h--;
      m += 60;
    }
    m--;
    s += 60;
  }
  s -= runtime;
  time = [h, m, (s + 0.001).toFixed(3)].join(":");
  return [date, time, runtime];
}

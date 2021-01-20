function solution(jobs) {
  if (jobs.length === 1) return jobs[0][1] - jobs[0][0];
  jobs.sort((a, b) => {
    if (b[0] === a[0]) return b[1] - a[1];
    return b[0] - a[0];
  });
  const n = jobs.length;
  let [start, during] = jobs.pop();
  let [endTime, totalDuringTime, waiting] = [start + during, during, []];
  while (true) {
    if (jobs.length) [jobs, waiting] = addIntoWaiting(jobs, waiting, endTime);
    if (waiting.length) {
      [endTime, totalDuringTime, waiting] = popNextFromWaiting(waiting, endTime, totalDuringTime);
    } else {
      [start, during] = jobs.pop();
      endTime = start + during;
      totalDuringTime += endTime - start;
    }
    if (!jobs.length && !waiting.length) break;
  }
  return Math.floor(totalDuringTime / n);
}

function setWaiting(waiting, endTime) {
  waiting.forEach((item) => {
    item.time = item.job[1] + endTime;
  });
  waiting.sort((a, b) => {
    if (b.time === a.time) return b.job[0] - a.job[0];
    return b.time - a.time;
  });
  return waiting;
}

function popNextFromWaiting(waiting, endTime, totalDuringTime) {
  waiting = setWaiting(waiting, endTime);
  const { job, time } = waiting.pop();
  const [start, during] = job;
  const diff = endTime - start;
  endTime = start + during + diff;
  totalDuringTime += endTime - start;
  return [endTime, totalDuringTime, waiting];
}

function addIntoWaiting(jobs, waiting, endTime) {
  while (jobs.length) {
    const [start, during] = jobs[jobs.length - 1];
    if (start > endTime) break;
    waiting.push({ job: [start, during] });
    jobs.pop();
  }
  return [jobs, waiting];
}

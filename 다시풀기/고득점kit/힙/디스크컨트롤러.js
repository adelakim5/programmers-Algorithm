function solution(jobs) {
  var answer = 0;
  const q = [];
  const n = jobs.length;
  let newJobs = jobs
    .map((e) => {
      const [st, en] = e;
      return { st, en, endTime: st + en };
    })
    .sort((a, b) => {
      if (a.st === b.st) return a.en - b.en;
      return a.st - b.st;
    });
  let lastTime = 0;
  let sum = 0;

  while (newJobs.length) {
    const { st, en, endTime } = newJobs.shift();
    lastTime = endTime;
    sum += lastTime - st;
    newJobs.forEach((e) => {
      if (e.st < lastTime) e.endTime = e.en + lastTime;
    });

    newJobs.sort((a, b) => {
      if (a.st < lastTime && b.st < lastTime) return a.en - b.en;
      return a.st - b.st;
    });
  }
  answer = Math.floor(sum / n);
  return answer;
}

// 다시 풀었는데 꽤 오랜 시간이 걸렸다..
// 너무 단순하게 접근했었다.

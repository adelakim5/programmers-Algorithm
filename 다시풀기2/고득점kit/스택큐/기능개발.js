function solution(progresses, speeds) {
  var answer = [];
  const newPro = progresses.reduce((acc, val, i) => {
    const remain = 100 - val;
    const days = Math.floor(remain / speeds[i]) + (remain % speeds[i] ? 1 : 0);
    acc.push(days);
    return acc;
  }, []);
  let cnt = 1;
  let pre = newPro[0];
  for (let i = 1; i < newPro.length; i++) {
    const value = newPro[i];
    if (value <= pre) cnt++;
    else {
      answer.push(cnt);
      pre = value;
      cnt = 1;
    }
  }
  answer.push(cnt);
  return answer;
}

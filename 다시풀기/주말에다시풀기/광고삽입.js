function solution(play_time, adv_time, logs) {
  if (play_time === adv_time) return "00:00:00";

  const totalTime = Array(parseTime(play_time)).fill(0);

  for (let i = 0; i < logs.length; i++) {
    let [st, en] = logs[i].split("-");
    st = parseTime(st);
    en = parseTime(en);
    totalTime[st]++;
    totalTime[en]--;
  }

  for (let i = 1; i < totalTime.length; i++) {
    totalTime[i] += totalTime[i - 1];
  }

  for (let i = 1; i < totalTime.length; i++) {
    totalTime[i] += totalTime[i - 1];
  }

  const adv = parseTime(adv_time);
  let max = totalTime[adv];
  let maxIndex = 0;

  for (let i = 0; i + adv < totalTime.length - 1; i++) {
    const tempValue = totalTime[adv + i] - totalTime[i];
    if (tempValue > max) {
      max = tempValue;
      maxIndex = i;
    }
  }
  return maxIndex ? recoverTime(maxIndex + 1) : recoverTime(maxIndex);
}

function recoverTime(time) {
  const convertNum = (num) => (num < 10 ? `0${num}` : num.toString());
  let h = Math.floor(time / 3600);
  time %= 3600;
  let m = Math.floor(time / 60);
  time %= 60;
  return `${convertNum(h)}:${convertNum(m)}:${convertNum(time)}`;
}

function parseTime(time) {
  let [h, m, s] = time.split(":").map((e) => +e);
  h *= 3600;
  m *= 60;
  return h + m + s;
}

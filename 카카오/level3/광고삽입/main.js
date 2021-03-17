function solution(play_time, adv_time, logs) {
  if (play_time === adv_time) return "00:00:00";
  const playTimeSec = getTime(play_time);
  const advTimeSec = getTime(adv_time);
  const totalTime = Array(playTimeSec + 1).fill(0);

  for (let log of logs) {
    const [st, en] = log.split("-");
    const stSec = getTime(st);
    const enSec = getTime(en);
    totalTime[stSec]++;
    totalTime[enSec]--;
  }

  for (let i = 1; i < playTimeSec; i++) {
    totalTime[i] = totalTime[i] + totalTime[i - 1];
  }

  for (let i = 1; i < playTimeSec; i++) {
    totalTime[i] = totalTime[i] + totalTime[i - 1];
  }

  let max = totalTime[advTimeSec];
  let start = 0;

  for (let i = 0; i < playTimeSec - advTimeSec; i++) {
    if (totalTime[advTimeSec + i] - totalTime[i] > max) {
      max = totalTime[advTimeSec + i] - totalTime[i];
      start = i;
    }
  }
  return start > 0 ? recoverTime(start + 1) : recoverTime(start);
}

function recoverTime(maxIndex) {
  let h = Math.floor(maxIndex / 3600);
  maxIndex %= 3600;
  let m = Math.floor(maxIndex / 60);
  maxIndex %= 60;
  let s = maxIndex;
  if (h < 10) h = `0${h}`;
  if (m < 10) m = `0${m}`;
  if (s < 10) s = `0${s}`;
  return `${h}:${m}:${s}`;
}

function getTime(time) {
  const result = time.split(":").map((e) => +e);
  return result[0] * 3600 + result[1] * 60 + result[2];
}

// test
// const play_time = "99:59:59";
// const adv_time = "25:00:00";
// const logs = ["69:59:59-89:59:59", "01:00:00-21:00:00", "79:59:59-99:59:59", "11:00:00-31:00:00"];
// console.log(solution(play_time, adv_time, logs));

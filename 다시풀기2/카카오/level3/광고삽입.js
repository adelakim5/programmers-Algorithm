function solution(play_time, adv_time, logs) {
  var answer = "";
  const playTime = parseTime(play_time);
  const advTime = parseTime(adv_time);
  if (playTime === advTime) return "00:00:00";

  let max = 0;
  let maxStart = -1;

  const totalTime = Array(playTime + 1).fill(0);

  for (let log of logs) {
    let [st, en] = log.split("-");
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

  for (let i = 0; i + advTime < playTime; i++) {
    if (totalTime[i + advTime] - totalTime[i] > max) {
      max = totalTime[i + advTime] - totalTime[i];
      maxStart = i;
    }
  }
  answer = maxStart > 0 ? recoverTime(maxStart + 1) : recoverTime(maxStart);
  return answer;
}

function recoverTime(parsedTime) {
  let h = Math.floor(parsedTime / 3600);
  if (h < 10) h = `0${h}`;
  parsedTime %= 3600;
  let m = Math.floor(parsedTime / 60);
  if (m < 10) m = `0${m}`;
  parsedTime %= 60;
  if (parsedTime < 10) parsedTime = `0${parsedTime}`;
  return `${h}:${m}:${parsedTime}`;
}

function parseTime(time) {
  let [h, m, s] = time.split(":").map((e) => +e);
  h *= 3600;
  m *= 60;
  return h + m + s;
}

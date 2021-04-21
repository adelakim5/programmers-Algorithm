/*

1. 각 line의 시간을 모두 밀리초로 통일한다. 
2. 각 line의 시작시간을 계산하고, [시작시간, 끝시간]으로 만든다. 
3. 1초 구간을 잡는다. 
    - 1초 구간의 시작시간은 각 line의 시작시간 ~ 시작시간 + 1초, 끝시간 ~ 끝시간 + 1초로 잡는다.  
    - 해당 1초 구간안에 시간이 포함된 line의 개수를 세어준다. 
4. 최대 개수를 반환한다. 

📌 시행착오
1. 00:00:0.000 의 경우, 시작시간을 0으로 잡아야 한다. 안그러면 음수가 되고... 계산 이상해짐
2. 1초 구간의 기준(1초 구간에서 시작시간)을 잘못 잡아서 꽤나 삽질함. 
3. 테스트케이스가 그래도 넉넉한 편이라 제출 하기 전에 문제점을 알 수 있었음. 하지만 한번에 맞추는 건 너무너무 어렵!
 
*/

function solution(lines) {
  var answer = 0;
  const newLines = lines
    .reduce((acc, val) => {
      const dates = parseDate(val);
      acc.push(dates);
      return acc;
    }, [])
    .sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < newLines.length; i++) {
    for (let j = 0; j < 2; j++) {
      const st = newLines[i][j];
      const en = st + 999;
      let cnt = 0;
      for (let [startTime, endTime] of newLines) {
        if (startTime > en || endTime < st) continue;
        cnt++;
      }
      answer = Math.max(answer, cnt);
    }
  }
  return answer;
}

function parseDate(e) {
  let [date, time, sec] = e.split(" ");
  time = time
    .split(":")
    .map((e) => Number(e))
    .reduce((acc, val, index) => {
      if (index === 0) acc += val * 3600000;
      else if (index === 1) acc += val * 60000;
      else acc += val * 1000;
      return acc;
    }, 0);
  sec = Number(sec.replace("s", ""));
  const startTime = time - sec * 1000 + 1;
  return [startTime <= 0 ? 0 : startTime, time];
}

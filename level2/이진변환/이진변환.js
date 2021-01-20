function solution(s) {
  let time = 0;
  let zeroCnt = 0;
  while (s !== "1") {
    let [res, cnt] = convertBinum(s);
    zeroCnt += cnt;
    s = res;
    time++;
  }
  let answer = [time, zeroCnt];
  return answer;
}

function convertBinum(s) {
  let res = "";
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") res += s[i];
    else cnt++;
  }
  return [res.length.toString(2), cnt];
}

function solution(name) {
  let answer = 0;
  let initNameArr = [];
  let n = name.length;
  for (let i = 0; i < n; i++) {
    initNameArr.push("A");
  }
  let i = 0;
  const visit = Array(n).fill(false);
  while (true) {
    const code = name.charCodeAt(i);
    visit[i] = true;
    console.log(`i: ${i}, code: ${code}, visit: ${visit}`);
    if (code !== 65) {
      if (code <= 78) {
        answer += code - 65;
      } else {
        answer += 91 - code;
      }
    }
    initNameArr[i] = name.charAt(i);
    console.log(initNameArr);
    if (initNameArr.join("") === name) break;

    for (let j = 1; j < n; j++) {
      if (i + j < n && name.charAt(i + j) !== "A" && !visit[i + j]) {
        i += j;
        answer += j;
        break;
      }
      if (i - j >= 0 && name.charAt(i - j) !== "A" && !visit[i - j]) {
        i -= j;
        answer += j;
        break;
      }
      if (i - j < 0 && name.charAt(i + n - j) !== "A" && !visit[i + n - j]) {
        i = i + n - j;
        answer += j;
        break;
      }
    }
  }
  return answer;
}

function solution(routes) {
  var answer = 0;
  routes.sort((a, b) => a[0] - b[0]);
  let st = 0;
  let en = 0;
  for (let i = 0; i < routes.length; i++) {
    const [currSt, currEn] = routes[i];
    if (!st && !en) {
      st = currSt;
      en = currEn;
      answer++;
      continue;
    }
    if (currSt > st) st = currSt;
    if (currEn < en) en = currEn;
    if (currSt > en) {
      st = currSt;
      en = currEn;
      answer++;
    }
  }
  return answer;
}

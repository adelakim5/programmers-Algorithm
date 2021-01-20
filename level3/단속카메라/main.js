function solution(routes) {
  var answer = 1;
  if (routes.length <= 1) return answer;
  routes.sort((a, b) => {
    if (a[0] === b[0]) b[1] - a[1];
    return a[0] - b[0];
  });
  let [a, b] = routes[0];
  for (let i = 1; i < routes.length; i++) {
    let [tempA, tempB] = routes[i];
    if (tempA >= a && tempB <= b) {
      a = tempA;
      b = tempB;
    } else if (tempA <= b && tempB > b) {
      a = tempA;
    } else if (tempA > b) {
      a = tempA;
      b = tempB;
      answer++;
    }
  }
  return answer;
}

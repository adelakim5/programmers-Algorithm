function solution(participant, completion) {
  var answer = "";
  const newPart = participant.sort().map((e, i) => ({ name: e, i }));
  const newCom = completion.sort().map((e, i) => ({ name: e, i }));
  for (let i = 0; i < newCom.length; i++) {
    if (!isSame(newCom[i], newPart[i])) return newPart[i].name;
  }
  answer = newPart[newCom.length].name;
  return answer;
}

function isSame(obj1, obj2) {
  return obj1.name === obj2.name && obj1.i === obj2.i;
}

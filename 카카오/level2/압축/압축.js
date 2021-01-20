function solution(msg) {
  var answer = [];
  let dict = getDict();
  if (msg.length === 1) {
    answer.push(dict.indexOf(msg));
    return answer;
  }
  let len = 1;
  for (let i = 0; i < msg.length; ) {
    let str = msg[i];
    let idx = dict.indexOf(str);
    let finalIdx = idx;
    while (idx !== -1) {
      str += msg[++i];
      idx = dict.indexOf(str);
      if (idx !== -1) finalIdx = idx;
      if (idx === -1) break;
    }
    answer.push(finalIdx);
    dict.push(str);
  }
  return answer;
}

function getDict() {
  let dict = ["0"];
  for (let i = 65; i <= 90; i++) {
    dict.push(String.fromCharCode(i));
  }
  return dict;
}

function solution(record) {
  let answer = [];
  let [arr, arrIdx] = initSet(record);
  arr = finalNameSet(arr, arrIdx);
  let results = Array();
  for (let i = 0; i < arrIdx.length; i++) {
    let curr = arr[arrIdx[i]];
    for (let j = 0; j < curr.length; j++) {
      results[curr[j].time] = curr[j];
    }
  }
  answer = print(results);
  return answer;
}

function initSet(record) {
  let arr = [];
  let arrIdx = [];
  for (let i = 0; i < record.length; i++) {
    let [state, uid, name] = record[i].split(" ");
    if (arr[uid] === undefined) {
      arr[uid] = [{ state, name, time: i }];
      arrIdx.push(uid);
    } else arr[uid].push({ state, name, time: i });
  }
  return [arr, arrIdx];
}

function finalNameSet(arr, arrIdx) {
  for (let i = 0; i < arrIdx.length; i++) {
    let idx = arrIdx[i];
    let finalName = getFinalName(arr[idx]);
    for (let j = 0; j < arr[idx].length; j++) {
      arr[idx][j].name = finalName;
    }
  }
  return arr;
}

function getFinalName(arrUser) {
  let name = "";
  for (let i = arrUser.length - 1; i >= 0; i--) {
    if (arrUser[i].state === "Enter") name = arrUser[i].name;
    if (arrUser[i].state === "Change") return arrUser[i].name;
    if (name !== "" && arrUser[i].name !== name) return name;
  }
  return name;
}

function print(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let state = arr[i].state;
    if (state === "Change") continue;
    switch (state) {
      case "Enter":
        res.push(arr[i].name + "님이 들어왔습니다.");
        break;
      case "Leave":
        res.push(arr[i].name + "님이 나갔습니다.");
        break;
    }
  }
  return res;
}

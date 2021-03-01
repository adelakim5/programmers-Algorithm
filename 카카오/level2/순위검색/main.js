function setGroup() {
  const group = {};
  const lang = ["java", "python", "cpp", "-"];
  const job = ["backend", "frontend", "-"];
  const career = ["junior", "senior", "-"];
  const food = ["chicken", "pizza", "-"];
  for (let l of lang) {
    group[l] = {};
    for (let j of job) {
      group[l][j] = {};
      for (let c of career) {
        group[l][j][c] = {};
        for (let f of food) {
          group[l][j][c][f] = [];
        }
      }
    }
  }
  return group;
}

function sortGroup(group) {
  const lang = ["java", "python", "cpp", "-"];
  const job = ["backend", "frontend", "-"];
  const career = ["junior", "senior", "-"];
  const food = ["chicken", "pizza", "-"];

  for (let l of lang) {
    for (let j of job) {
      for (let c of career) {
        for (let f of food) {
          group[l][j][c][f].sort((a, b) => a - b);
        }
      }
    }
  }
  return group;
}

function solution(info, query) {
  const answer = [];
  let group = setGroup();
  for (let i of info) {
    const [lang, job, career, food, s_score] = i.split(" ");
    const score = +s_score;
    group[lang][job][career][food].push(score);

    group["-"][job][career][food].push(score);
    group[lang]["-"][career][food].push(score);
    group[lang][job]["-"][food].push(score);
    group[lang][job][career]["-"].push(score);

    group["-"]["-"][career][food].push(score);
    group[lang]["-"]["-"][food].push(score);
    group[lang][job]["-"]["-"].push(score);
    group["-"][job]["-"][food].push(score);
    group["-"][job][career]["-"].push(score);
    group[lang]["-"][career]["-"].push(score);

    group["-"]["-"]["-"][food].push(score);
    group[lang]["-"]["-"]["-"].push(score);
    group["-"][job]["-"]["-"].push(score);
    group["-"]["-"][career]["-"].push(score);

    group["-"]["-"]["-"]["-"].push(score);
  }

  group = sortGroup(group);

  for (let e of query) {
    const [lang, job, career, food, test] = e.replace(/ and /g, " ").split(" ");
    const score = +test;
    const selectedGroup = group[lang][job][career][food];
    let st = 0;
    let en = selectedGroup.length - 1;
    while (st < en) {
      const mid = Math.floor((st + en) / 2);
      if (selectedGroup[mid] >= score) {
        en = mid;
      } else st = mid + 1;
    }
    let i = 0;
    for (i = st; i < selectedGroup.length; i++) {
      if (selectedGroup[i] >= score) break;
    }
    answer.push(selectedGroup.length - i);
  }
  return answer;
}

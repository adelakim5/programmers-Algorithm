function solution(n, t, m, timetable) {
  var answer = "";
  let cIndex = 0;
  let sortedTimetable = sortCrew(timetable);
  const buses = Array(n);
  let time = 0;
  for (let i = 0; i < n; i++) {
    time = i === 0 ? 9 * 60 : buses[i - 1].time + t;
    let people = [];
    while (cIndex < timetable.length) {
      if (people.length >= m) break;
      const crewTime = sortedTimetable[cIndex];
      if (crewTime > time) break;
      people.push(sortedTimetable[cIndex]);
      cIndex++;
    }
    buses[i] = { time, people };
  }
  if (buses[buses.length - 1].people.length < m) {
    const lastTime = buses[buses.length - 1].time;
    answer = makeAnswerForm(lastTime);
  } else {
    const lastPeople = buses[buses.length - 1].people;
    const lastTime = lastPeople[lastPeople.length - 1] - 1;
    answer = makeAnswerForm(lastTime);
  }
  return answer;
}

function makeAnswerForm(lastTime) {
  let hour = Math.floor(lastTime / 60);
  let min = lastTime % 60;
  hour = hour < 10 ? `0${hour}` : hour.toString();
  min = min < 10 ? `0${min}` : min.toString();
  return `${hour}:${min}`;
}

function calculateTime(pastTime, t) {
  let [hour, minute] = pastTime;
  let newMin = minute + t;
  if (newMin >= 60) {
    hour += 1;
    newMin -= 60;
  }
  return [hour, newMin];
}

function sortCrew(timetable) {
  timetable = timetable.map((e) => {
    const [hour, min] = e.split(":").map((e) => +e);
    e = hour * 60 + min;
    return e;
  });
  timetable.sort((a, b) => a - b);
  return timetable;
}

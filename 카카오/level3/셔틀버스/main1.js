function solution(n, t, m, timetable) {
  var answer = "";
  let cIndex = 0;
  let [busHour, busMin] = [9, 0];
  let sortedTimetable = sortCrew(timetable);
  const buses = Array(n);
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      [busHour, busMin] = [9, 0];
    } else {
      [busHour, busMin] = calculateTime(buses[i - 1].time, t);
    }
    let people = [];
    while (cIndex < timetable.length) {
      if (people.length >= m) break;
      const [crew_hour, crew_min] = sortedTimetable[cIndex].split(":").map((e) => +e);
      if (crew_hour > busHour) break;
      if (crew_hour < busHour) {
        people.push(sortedTimetable[cIndex]);
        cIndex++;
      } else {
        if (crew_min > busMin) break;
        people.push(sortedTimetable[cIndex]);
        cIndex++;
      }
    }
    buses[i] = { time: [busHour, busMin], people };
  }
  if (buses[buses.length - 1].people.length < m) {
    let [lastHour, lastMin] = buses[buses.length - 1].time;
    lastHour = lastHour < 10 ? `0${lastHour}` : lastHour.toString();
    lastMin = lastMin < 10 ? `0${lastMin}` : lastMin.toString();
    answer = `${lastHour}:${lastMin}`;
  } else {
    const lastPeople = buses[buses.length - 1].people;
    let lastCrew = lastPeople[lastPeople.length - 1];
    let [lastHour, lastMin] = lastCrew.split(":").map((e) => +e);
    let newMin = lastMin - 1;
    if (newMin < 0) {
      newMin += 60;
      lastHour--;
    }
    lastHour = lastHour < 10 ? `0${lastHour}` : lastHour.toString();
    newMin = newMin < 10 ? `0${newMin}` : newMin.toString();
    answer = `${lastHour}:${newMin}`;
  }
  return answer;
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
  timetable.sort((a, b) => {
    const [ahour, amin] = a.split(":").map((e) => +e);
    const [bhour, bmin] = b.split(":").map((e) => +e);
    if (ahour === bhour) return amin - bmin;
    return ahour - bhour;
  });
  return timetable;
}

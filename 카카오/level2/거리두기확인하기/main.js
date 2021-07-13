function solution(places) {
  var answer = [];

  for (let place of places) {
    const people = getPeopleInPlace(place);
    let flag = true;
    for (let [i, j] of people) {
      if (
        !checkLeft([i, j], place) ||
        !checkRight([i, j], place) ||
        !checkUp([i, j], place) ||
        !checkDown([i, j], place) ||
        !checkSlideLeftUp([i, j], place) ||
        !checkSlideLeftDown([i, j], place) ||
        !checkSlideRightUp([i, j], place) ||
        !checkSlideRightDown([i, j], place)
      ) {
        answer.push(0);
        flag = false;
        break;
      }
    }

    if (flag) answer.push(1);
  }

  return answer;
}

function checkBound(nx, ny) {
  return nx >= 0 && ny >= 0 && nx < 5 && ny < 5;
}

function checkSlideLeftUp([i, j], place) {
  const [ni, nj] = [i - 1, j - 1];
  const [t1ni, t1nj] = [i - 1, j];
  const [t2ni, t2nj] = [i, j - 1];
  return checkSlideLocation([ni, nj], [t1ni, t1nj], [t2ni, t2nj], place);
}

function checkSlideLeftDown([i, j], place) {
  const [ni, nj] = [i + 1, j - 1];
  const [t1ni, t1nj] = [i, j - 1];
  const [t2ni, t2nj] = [i + 1, j];
  return checkSlideLocation([ni, nj], [t1ni, t1nj], [t2ni, t2nj], place);
}

function checkSlideRightUp([i, j], place) {
  const [ni, nj] = [i - 1, j + 1];
  const [t1ni, t1nj] = [i - 1, j];
  const [t2ni, t2nj] = [i, j + 1];
  return checkSlideLocation([ni, nj], [t1ni, t1nj], [t2ni, t2nj], place);
}

function checkSlideRightDown([i, j], place) {
  const [ni, nj] = [i + 1, j + 1];
  const [t1ni, t1nj] = [i + 1, j];
  const [t2ni, t2nj] = [i, j + 1];
  return checkSlideLocation([ni, nj], [t1ni, t1nj], [t2ni, t2nj], place);
}

function checkSlideLocation([ni, nj], [t1ni, t1nj], [t2ni, t2nj], place) {
  if (!checkBound(ni, nj)) return true;
  if (place[ni][nj] !== "P") return true;
  if (place[t1ni][t1nj] === "X" && place[t2ni][t2nj] === "X") return true;
  return false;
}

function checkNextLocation([ni, nj], [tni, tnj], place) {
  if (!checkBound(ni, nj)) return true;
  if (place[ni][nj] === "P") return false;
  if (place[ni][nj] === "X") return true;
  if (!checkBound(tni, tnj)) return true;
  if (place[ni][nj] !== "X" && place[tni][tnj] === "P") return false;
  if (place[ni][nj] !== "X" && place[tni][tnj] !== "P") return true;
}

function checkRight([i, j], place) {
  const [ni, nj] = [i, j + 1];
  const [tni, tnj] = [i, j + 2];
  return checkNextLocation([ni, nj], [tni, tnj], place);
}

function checkLeft([i, j], place) {
  const [ni, nj] = [i, j - 1];
  const [tni, tnj] = [i, j - 2];
  return checkNextLocation([ni, nj], [tni, tnj], place);
}

function checkUp([i, j], place) {
  const [ni, nj] = [i - 1, j];
  const [tni, tnj] = [i - 2, j];
  return checkNextLocation([ni, nj], [tni, tnj], place);
}

function checkDown([i, j], place) {
  const [ni, nj] = [i + 1, j];
  const [tni, tnj] = [i + 2, j];
  return checkNextLocation([ni, nj], [tni, tnj], place);
}

function getPeopleInPlace(place) {
  let result = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (place[i][j] === "P") result.push([i, j]);
    }
  }
  return result;
}

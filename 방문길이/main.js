function solution(dirs) {
  var answer = 0;
  let [x, y] = [0, 0];
  let visitedSet = new Set();
  for (let dir of dirs) {
    if (dir === "U" && isInG(x - 1, y)) {
      let path = `${(x + (x - 1)) / 2} ${y}`;
      if (!isVisited(visitedSet, path)) {
        answer++;
        visitedSet.add(path);
      }
      x--;
    }
    if (dir === "D" && isInG(x + 1, y)) {
      let path = `${(x + (x + 1)) / 2} ${y}`;
      if (!isVisited(visitedSet, path)) {
        answer++;
        visitedSet.add(path);
      }
      x++;
    }
    if (dir === "R" && isInG(x, y + 1)) {
      let path = `${x} ${(y + (y + 1)) / 2}`;
      if (!isVisited(visitedSet, path)) {
        answer++;
        visitedSet.add(path);
      }
      y++;
    }
    if (dir === "L" && isInG(x, y - 1)) {
      let path = `${x} ${(y + (y - 1)) / 2}`;
      if (!isVisited(visitedSet, path)) {
        answer++;
        visitedSet.add(path);
      }
      y--;
    }
  }
  return answer;
}

function isInG(x, y) {
  if (x >= -5 && x <= 5 && y >= -5 && y <= 5) return true;
  return false;
}

function isVisited(visitedSet, path) {
  if (visitedSet.has(path)) return true;
  return false;
}

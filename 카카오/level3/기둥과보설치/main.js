function solution(n, build_frame) {
  let pillars = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
  let bos = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
  for (let [x, y, a, b] of build_frame) {
    x++;
    y++;
    if (a === 0) {
      // 기둥
      if (b === 1) if (canInstallPillar(pillars, bos, [x, y, a, b])) pillars[y][x] = 1;
      if (b === 0) {
        pillars[y][x] = 0;
        if (!canRemovePillar(pillars, bos, [x, y, a, b])) pillars[y][x] = 1;
      }
    } else {
      // 보
      if (b === 1) if (canInstallBo(pillars, bos, [x, y, a, b])) bos[y][x] = 1;
      if (b === 0) {
        bos[y][x] = 0;
        if (!canRemoveBo(pillars, bos, [x, y, a, b])) bos[y][x] = 1;
      }
    }
  }
  return enclose(pillars, bos, n);
}

function enclose(pillars, bos, n) {
  let answer = [];
  for (let y = 1; y < n + 2; y++) {
    for (let x = 1; x < n + 2; x++) {
      if (pillars[y][x]) answer.push([x - 1, y - 1, 0]);
      if (bos[y][x]) answer.push([x - 1, y - 1, 1]);
    }
  }
  answer.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) return a[2] - b[2];
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  return answer;
}

function canInstallPillar(pillars, bos, frame) {
  const [x, y, a, b] = frame;
  if (y === 1 || pillars[y - 1][x] === 1 || bos[y][x - 1] === 1 || bos[y][x] === 1) return true;
  return false;
}

function canInstallBo(pillars, bos, frame) {
  const [x, y, a, b] = frame;
  if (pillars[y - 1][x] === 1 || pillars[y - 1][x + 1] === 1 || (bos[y][x - 1] === 1 && bos[y][x + 1] === 1)) return true;
  return false;
}

function canRemovePillar(pillars, bos, frame) {
  const [x, y, a, b] = frame;
  if (pillars[y + 1][x] === 1 && !canInstallPillar(pillars, bos, [x, y + 1, a, b])) return false;
  if (bos[y + 1][x] === 1 && !canInstallBo(pillars, bos, [x, y + 1, a, b])) return false;
  if (bos[y + 1][x - 1] === 1 && !canInstallBo(pillars, bos, [x - 1, y + 1, a, b])) return false;
  return true;
}

function canRemoveBo(pillars, bos, frame) {
  const [x, y, a, b] = frame;
  if (pillars[y][x + 1] === 1 && !canInstallPillar(pillars, bos, [x + 1, y, a, b])) return false;
  if (pillars[y][x] === 1 && !canInstallPillar(pillars, bos, [x, y, a, b])) return false;
  if (bos[y][x - 1] === 1 && !canInstallBo(pillars, bos, [x - 1, y, a, b])) return false;
  if (bos[y][x + 1] === 1 && !canInstallBo(pillars, bos, [x + 1, y, a, b])) return false;
  return true;
}

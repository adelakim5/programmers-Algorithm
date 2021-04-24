function solution(s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      if (s[i] !== s[j - 1]) continue;
      let temp = s.slice(i, j);
      if (temp.length <= max) break;
      if (isPal(temp)) max = temp.length;
    }
  }
  return max;
}

function isPal(temp) {
  for (let i = 0; i < Math.floor(temp.length); i++) {
    if (temp[i] !== temp[temp.length - 1 - i]) return false;
  }
  return true;
}

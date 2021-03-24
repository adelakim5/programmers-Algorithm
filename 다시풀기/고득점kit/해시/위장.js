function solution(clothes) {
  var answer = 1;
  Object.values(
    clothes.reduce((acc, val) => {
      const [c, k] = val;
      if (!acc[k]) acc[k] = []; // 종류별로 옷 분류
      acc[k].push(c);
      return acc;
    }, {})
  ).forEach((e) => (answer *= e.length + 1));
  return answer - 1;
}

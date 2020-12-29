let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];
solution(genres, plays);

function solution(genres, plays) {
  var answer = [];
  let map = new Map();
  map.set("totalSum", {});
  for (let i = 0; i < genres.length; i++) {
    const key = genres[i];
    if (map.has(key)) {
      let value = map.get(key);
      value.push({ num: i, cnt: plays[i] });
      map.set(key, value);
      let sum = map.get("totalSum");
      sum[genres[i]] += plays[i];
      map.set("totalSum", sum);
    } else {
      let value = [{ num: i, cnt: plays[i] }];
      map.set(key, value);
      let sum = map.get("totalSum");
      sum[genres[i]] = plays[i];
      map.set("totalSum", sum);
    }
  }
  console.log(map);
  return answer;
}

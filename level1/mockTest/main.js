let people = [2, 2, 2];
let max = Math.max(...people);
let temp = people.map((e, i) => {
  if (e >= max) return i + 1;
  else continue;
});
// let temp = [...people.filter((e) => e >= max).keys()].map((e) => e + 1);
// let temp = [...people.keys()];
console.log(temp);

const transpose = (matrix) => matrix.reduce((result, row) => row.map((_, i) => [...(result[i] || []), row[i]]), []);

const rows = 6;
const columns = 6;
const queries = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];
solution(rows, columns, queries);

function solution(rows, columns, queries) {
  var answer = [];
  const array = setArray(rows, columns);
  for (let query of queries) {
    const [x1, y1, x2, y2] = query.map((e) => e - 1);
    const temp = array[x1][y1];
    let [row, col] = [x1, y1];
    let d = 0;
    let min = temp;
    while (true) {
      console.log(array[row][col]);
      min = Math.min(min, array[row][col]);

      if (d === 0) {
        array[row][col] = array[row + 1][col];
        row++;
        if (row === x2) d = 1;
      } else if (d === 1) {
        array[row][col] = array[row][col + 1];
        col++;
        if (col === y2) d = 2;
      } else if (d === 2) {
        array[row][col] = array[row - 1][col];
        row--;
        if (row === x1) d = 3;
      } else if (d === 3) {
        if (row === x1 && col === y1 + 1) {
          array[row][col] = temp;
          break;
        }
        array[row][col] = array[row][col - 1];
        col--;
      }
    }
    answer.push(min);
  }
  return answer;
}

function setArray(rows, columns) {
  const array = Array.from(Array(rows), () => Array(columns).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      array[i][j] = i * columns + j + 1;
    }
  }
  return array;
}

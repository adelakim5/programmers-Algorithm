function solution(rows, columns, queries) {
  var answer = [];
  const array = setArray(rows, columns);
  for (let query of queries) {
    const [x1, y1, x2, y2] = query.map((e) => e - 1);
    answer.push(turn(x1, y1, x2, y2));
  }

  function turn(x1, y1, x2, y2) {
    let remain = array[x1][y1];
    let row = x1;
    let col = y1;
    let d = 0;
    let min = remain;

    while (true) {
      min = Math.min(array[row][col], min);

      if (!d) {
        array[row][col] = array[++row][col];
        if (row === x2) d++;
      } else if (d === 1) {
        array[row][col] = array[row][++col];
        if (col === y2) d++;
      } else if (d === 2) {
        array[row][col] = array[--row][col];
        if (row === x1) d++;
      } else if (d === 3) {
        if (col === y1 + 1) {
          array[row][col] = remain;
          break;
        }
        array[row][col] = array[row][--col];
      }
    }
    return min;
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

// 생각지 못한 풀이법을 공부한 느낌이랄까..
// 배열돌리는거 어렵당.. ㅜㅜ 연습 또 연습하기!

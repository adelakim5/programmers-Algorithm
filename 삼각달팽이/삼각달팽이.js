function solution(n) {
  var answer = [];
  let [arr, size] = setArr(n);
  let num = 1;
  let row = 0;
  let col = 0;
  arr[row][col] = num;
  //   console.log(`arr`);
  //   console.log(arr);
  //   console.log(`size: ${size}`);
  while (true) {
    if (num === size) break;
    // (row >= 1 && col >= 1 && arr[row - 1][col - 1] !== 0)
    if (row < n - 1 && arr[row + 1][col] === 0) {
      row++;
      num++;
      arr[row][col] = num;
      //   console.log(`1::: arr: `);
      //   console.log(`1, row:${row}, col:${col}`);
      //   console.log(arr);
    } else {
      if (arr[row][col + 1] === 0) {
        while (arr[row][col + 1] === 0) {
          col++;
          num++;
          arr[row][col] = num;
        }
        // console.log(`else 2::: arr:`);
        // console.log(`2, row: ${row}, col: ${col}`);
        // console.log(arr);
      }
      if (arr[row][col + 1] !== 0 && arr[row - 1][col - 1] === 0) {
        while (arr[row - 1][col - 1] === 0) {
          row--;
          col--;
          num++;
          arr[row][col] = num;
        }
        // console.log(`else 3::: arr:`);
        // console.log(`3, row: ${row}, col: ${col}`);
        // console.log(arr);
      }
    }
  }
  for (let values of arr) {
    answer.push(...values);
  }
  return answer;
}

function setArr(n) {
  let arr = [];
  let size = 0;
  for (let i = 0; i < n; i++) {
    arr[i] = Array(i + 1).fill(0);
    size += i + 1;
  }
  return [arr, size];
}

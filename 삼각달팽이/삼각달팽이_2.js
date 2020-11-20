function solution(n) {
  let arr = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill());
  let row = -1;
  let col = 0;
  let num = 0;
  for (let i = n; i > 0; i -= 3) {
    // console.log(`i: ${i}`);
    arr[++row][col] = ++num;
    for (let j = 0; j < i - 1; j++) arr[++row][col] = ++num; // 아래로 채우기
    // console.log(arr);
    for (let j = 0; j < i - 1; j++) arr[row][++col] = ++num; // 오른쪽 옆으로 채우기
    // console.log(arr);
    for (let j = 0; j < i - 2; j++) arr[--row][--col] = ++num; // 위로 채우기
    // console.log(arr);
  }
  return arr.flat();
}

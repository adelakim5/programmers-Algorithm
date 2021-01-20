// function solution(array, commands) {
//   var answer = [];
//   for (const command of commands) {
//     const [i, j, k] = command;
//     let newArr = array.slice(i - 1, j);
//     newArr.sort((a, b) => a - b);
//     answer.push(newArr[k - 1]);
//   }
//   return answer;
// }

function solution(array, commands) {
  return commands.reduce((acc, command, idx) => {
    const [i, j, k] = command;
    acc.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    return acc;
  }, []);
}

function solution(array, commands) {
  return commands.reduce((acc, val) => {
    const [i, j, k] = val;
    const newArr = array.slice(i - 1, j).sort((a, b) => a - b);
    acc.push(newArr[k - 1]);
    return acc;
  }, []);
}

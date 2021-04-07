function solution(operations) {
  const q = operations.reduce((acc, val) => {
    const [op, num] = val.split(" ");
    if (op === "I") acc.push(+num);
    else if (acc.length && +num === 1) acc.shift();
    else if (acc.length && +num === -1) acc.pop();
    acc.sort((a, b) => b - a);
    return acc;
  }, []);
  return q.length ? [q[0], q[q.length - 1]] : [0, 0];
}

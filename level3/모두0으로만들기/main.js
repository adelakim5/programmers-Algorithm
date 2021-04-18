function solution(a, edges) {
  var answer = 0n;
  if (a.reduce((acc, val) => acc + val) !== 0) return -1;
  const tree = Array.from(Array(a.length), () => Array());
  edges.forEach(([p, c]) => {
    tree[p].push(c);
    tree[c].push(p);
  });
  const stack = [{ id: 0, p: null }];
  const visited = Array(a.length).fill(false);
  while (stack.length) {
    const { id, p } = stack.pop();

    if (visited[id]) {
      answer += BigInt(Math.abs(a[id]));
      a[p] += a[id];
      a[id] = 0;
      continue;
    }

    visited[id] = true;
    stack.push({ id, p });
    for (let child of tree[id]) {
      if (!visited[child]) stack.push({ id: child, p: id });
    }
  }
  return answer;
}

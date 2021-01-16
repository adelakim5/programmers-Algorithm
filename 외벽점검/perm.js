function permutation(dist, size, res, result, visited) {
  if (res.length === size) {
    result.push([...res]);
    return;
  }
  for (let i = 0; i < dist.length; i++) {
    if (!visited[dist[i]]) {
      res.push(dist[i]);
      visited[dist[i]] = true;
      permutation(dist, size, res, result, visited);
      res.pop();
      visited[dist[i]] = false;
    }
  }
}

let dist = [1, 2, 3, 4, 5];
for (let size = 1; size <= dist.length; size++) {
  let result = [];
  let visited = Array(dist.length + 1).fill(false);
  permutation(dist, size, [], result, visited);
  console.log(`size: ${size}`);
  console.log(result);
  console.log("-----------------------");
}

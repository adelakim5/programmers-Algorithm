function solution(n, edge) {
  var answer = 0;
  // let adj = setAdjacentList(edge);
  // console.log(adj);
  let map = setEdge(edge);
  let array = Array(n + 1).fill(-1);
  array[1] = 0;
  let max = 0;
  [array, max] = go(1, map, n, array);
  for (let val of array) {
    if (val === max) answer++;
  }
  return answer;
}

function go(start, map, n, array) {
  let q = [];
  let nexts = map.get(start);
  let visited = Array(n + 1).fill(false);
  visited[start] = true;
  for (let next of nexts) {
    q.push({ next, cnt: 1 });
    array[next] = 1;
    visited[next] = true;
  }
  let max = 1;
  while (q.length) {
    let { next, cnt } = q.shift();
    if (max < cnt) max = cnt;
    nexts = map.get(next);
    for (let i = 0; i < nexts.length; i++) {
      if (visited[nexts[i]]) continue;
      q.push({ next: nexts[i], cnt: cnt + 1 });
      visited[nexts[i]] = true;
      array[nexts[i]] = cnt + 1;
    }
  }
  return [array, max];
}

// function setAdjacentList(edges) {
//   const adjList = edges.reduce((G, [from, to]) => {
//     G[from] = (G[from] || []).concat(to);
//     G[to] = (G[to] || []).concat(from);
//     return G;
//   }, {});
//   return adjList;
// }

function setEdge(edges) {
  let map = new Map();
  for (let edge of edges) {
    let [x, y] = edge;
    if (!map.has(x)) {
      map.set(x, [y]);
    } else {
      let values = map.get(x);
      values.push(y);
      map.set(x, values);
    }
    if (!map.has(y)) {
      map.set(y, [x]);
    } else {
      let values = map.get(y);
      values.push(x);
      map.set(y, values);
    }
  }
  return map;
}

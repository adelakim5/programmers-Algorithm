function solution(n, results) {
  var answer = 0;
  let graph = setInitGraph(results, n);
  graph = updateGraph(graph, n);
  for (let i = 1; i <= n; i++) {
    let canKnow = true;
    for (let j = 1; j <= n; j++) {
      if (i !== j && graph[i][j] === Infinity) {
        canKnow = false;
        break;
      }
    }
    if (canKnow) answer++;
  }
  return answer;
}

function updateGraph(graph, n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        if (graph[j][k] === Infinity) {
          if (graph[j][i] === 1 && graph[i][k] === 1) graph[j][k] = 1;
          if (graph[j][i] === -1 && graph[i][k] === -1) graph[j][k] = -1;
        }
      }
    }
  }
  return graph;
}

function setInitGraph(results, n) {
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
  graph.forEach((row, i) => (row[i] = 0));
  results.forEach((value) => {
    let [win, lose] = value;
    graph[win][lose] = -1;
    graph[lose][win] = 1;
  });
  return graph;
}

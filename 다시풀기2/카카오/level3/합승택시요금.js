class MinHeap {
  constructor() {
    this.nodes = [];
  }

  insert(data) {
    this.nodes.push(data);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;

    const currentNode = this.nodes[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.nodes[parentIndex];
    if (parentNode.value <= currentNode.value) return;

    this.nodes[index] = parentNode;
    this.nodes[parentIndex] = currentNode;
    index = parentIndex;
    this.bubbleUp(index);
  }

  extract() {
    const min = this.nodes[0];
    if (this.nodes.length === 1) {
      this.nodes.pop();
      return min;
    }
    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const length = this.nodes.length;

    let minimum = index;

    if (this.nodes[leftChildIndex] !== undefined && this.nodes[rightChildIndex] !== undefined) {
      if (
        leftChildIndex <= length &&
        this.nodes[leftChildIndex].value < this.nodes[minimum].value
      ) {
        minimum = leftChildIndex;
      }

      if (
        rightChildIndex <= length &&
        this.nodes[rightChildIndex].value < this.nodes[minimum].value
      ) {
        minimum = rightChildIndex;
      }
    }
    if (minimum !== index) {
      let t = this.nodes[minimum];
      this.nodes[minimum] = this.nodes[index];
      this.nodes[index] = t;
      this.trickleDown(minimum);
    }
  }
}

function solution(n, s, a, b, fares) {
  var answer = 0;
  const g = fillG(fares, n);
  const heap = new MinHeap();

  const sToAll = calMinDistance(heap, g, s, n);
  const aToAll = calMinDistance(heap, g, a, n);
  const bToAll = calMinDistance(heap, g, b, n);

  let min = sToAll[a] + sToAll[b];

  for (let i = 1; i <= n; i++) {
    const comm = sToAll[i];
    const aCost = aToAll[i];
    const bCost = bToAll[i];
    if (min > comm + aCost + bCost) min = comm + aCost + bCost;
  }

  answer = min;

  return answer;
}

function calMinDistance(heap, g, s, n) {
  const d = Array(n + 1).fill(Infinity);
  d[s] = 0;

  heap.insert({ index: s, value: 0 });

  while (heap.nodes.length) {
    const { index, value } = heap.extract();

    for (let i = 1; i <= n; i++) {
      const tempVal = g[index][i];
      if (tempVal + value < d[i]) {
        d[i] = tempVal + value;
        heap.insert({ index: i, value: d[i] });
      }
    }
  }

  return d;
}

function fillG(fares, n) {
  const g = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

  for (let i = 0; i <= n; i++) {
    g[i][i] = 0;
  }

  for (let [st, en, w] of fares) {
    g[st][en] = w;
    g[en][st] = w;
  }

  return g;
}

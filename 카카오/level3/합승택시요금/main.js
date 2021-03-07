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
      if (leftChildIndex <= length && this.nodes[leftChildIndex].value < this.nodes[minimum].value) {
        minimum = leftChildIndex;
      }

      if (rightChildIndex <= length && this.nodes[rightChildIndex].value < this.nodes[minimum].value) {
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
  const g = setGraph(n, fares);
  const heap = new MinHeap();

  const stToAll = calIndividual(heap, g, s, n);
  const aToAll = calIndividual(heap, g, a, n);
  const bToAll = calIndividual(heap, g, b, n);

  let min = stToAll[a] + stToAll[b];
  for (let i = 1; i <= n; i++) {
    const commCost = stToAll[i];
    const aCost = aToAll[i];
    const bCost = bToAll[i];
    if (min > commCost + aCost + bCost) min = commCost + aCost + bCost;
  }

  return min;
}

function calIndividual(heap, g, s, n) {
  const d = Array(n + 1).fill(Infinity);
  heap.insert({ index: s, value: 0 });
  d[s] = 0;
  while (heap.nodes.length) {
    const { index, value } = heap.extract();
    if (d[index] === value) {
      for (let i = 1; i <= d.length; i++) {
        const tempValue = g[index][i];
        if (tempValue + value < d[i]) {
          d[i] = tempValue + value;
          heap.insert({ index: i, value: tempValue + value });
        }
      }
    }
  }
  return d;
}

function setGraph(n, fares, a, b) {
  const g = Array.from(Array(n + 1), (_) => Array(n + 1).fill(Infinity));
  for (let i = 1; i <= n; i++) {
    g[i][i] = 0;
  }
  for (const [st, en, w] of fares) {
    if (g[st][en] > w) {
      g[st][en] = w;
      g[en][st] = w;
    }
  }
  return g;
}

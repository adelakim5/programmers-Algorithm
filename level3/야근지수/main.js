class MaxHeap {
  constructor() {
    this.nodes = [];
  }
  insert(data) {
    this.nodes.push(data);
    this.bubbleUp();
  }
  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;
    let currNode = this.nodes[index];
    let parentIdx = Math.floor((index - 1) / 2);
    let parentNode = this.nodes[parentIdx];
    if (currNode <= parentNode) return;
    this.nodes[parentIdx] = currNode;
    this.nodes[index] = parentNode;
    this.bubbleUp(parentIdx);
  }
  extract() {
    let x = this.nodes[0];
    if (this.nodes.length === 1) {
      this.nodes.pop();
      return x;
    }
    let last = this.nodes.pop();
    this.nodes[0] = last;
    this.trickleDown();
    return x;
  }
  trickleDown(index = 0) {
    let leftChildIdx = index * 2 + 1;
    let rightChildIdx = index * 2 + 2;
    let maximum = index;
    if (!this.nodes[leftChildIdx] && !this.nodes[rightChildIdx]) return;
    if (!this.nodes[rightChildIdx]) {
      maximum = this.nodes[leftChildIdx] > this.nodes[index] ? leftChildIdx : maximum;
    }
    if (this.nodes[leftChildIdx] && this.nodes[rightChildIdx]) {
      if (this.nodes[leftChildIdx] > this.nodes[rightChildIdx]) {
        maximum = this.nodes[leftChildIdx] > this.nodes[index] ? leftChildIdx : maximum;
      } else {
        maximum = this.nodes[rightChildIdx] > this.nodes[index] ? rightChildIdx : maximum;
      }
    }
    if (maximum !== index) {
      let temp = this.nodes[maximum];
      this.nodes[maximum] = this.nodes[index];
      this.nodes[index] = temp;
      this.trickleDown(maximum);
    }
  }
}

function solution(n, works) {
  var answer = 0;
  let heap = new MaxHeap();
  works.forEach((work) => heap.insert(work));
  while (n > 0) {
    let max = heap.extract();
    if (max <= 0) return 0;
    max--;
    n--;
    heap.insert(max);
  }
  answer = heap.nodes.reduce((acc, val) => acc + val * val, 0);
  return answer;
}

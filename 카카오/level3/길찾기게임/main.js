class Node {
  constructor(info) {
    const [x, y, idx] = info;
    this.x = x;
    this.y = y;
    this.idx = idx;
    this.left = null;
    this.right = null;
  }
}

class List {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(info) {
    let node = new Node(info);
    if (!this.root) {
      this.root = node;
      this.size++;
      return;
    }
    this.trickleDown(node);
  }
  trickleDown(node, currentParentNode = this.root) {
    if (currentParentNode.x > node.x) {
      if (currentParentNode.left) this.trickleDown(node, currentParentNode.left);
      else {
        currentParentNode.left = node;
        this.size++;
        return;
      }
    } else {
      if (currentParentNode.right) this.trickleDown(node, currentParentNode.right);
      else {
        currentParentNode.right = node;
        this.size++;
        return;
      }
    }
  }
}

function solution(nodeinfo) {
  for (let i = 0; i < nodeinfo.length; i++) {
    nodeinfo[i].push(i + 1);
  }
  nodeinfo.sort((a, b) => {
    if (b[1] === a[1]) return a[0] - b[0];
    return b[1] - a[1];
  });
  const list = new List();
  for (const info of nodeinfo) {
    list.insert(info);
  }
  let answer = [];
  answer.push(preOrder(list.root, []));
  answer.push(postOrder(list.root, []));
  //   console.log(list);
  //   console.log(answer);
  return answer;
}

function preOrder(node, result) {
  if (node) {
    result.push(node.idx);
    preOrder(node.left, result);
    preOrder(node.right, result);
  }
  return result;
}

function postOrder(node, result) {
  if (node) {
    postOrder(node.left, result);
    postOrder(node.right, result);
    result.push(node.idx);
  }
  return result;
}

// test
const nodeinfo = [
  [5, 3],
  [11, 5],
  [13, 3],
  [3, 5],
  [6, 1],
  [1, 3],
  [8, 6],
  [7, 2],
  [2, 2],
];

solution(nodeinfo);

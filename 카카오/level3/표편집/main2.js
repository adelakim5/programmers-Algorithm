class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    }
    this.tail.right = node;
    node.left = this.tail;
    this.tail = node;
    this.size++;
  }

  findTargetToUp(selected, index) {
    let t = selected;
    for (let i = 0; i < index; i++) {
      t = t.left;
    }
    return t;
  }

  findTargetToDown(selected, index) {
    let t = selected;
    for (let i = 0; i < index; i++) {
      t = t.right;
    }
    return t;
  }

  findTarget(index) {
    let t = this.head;
    for (let i = 0; i < this.size; i++) {
      if (t.value === index) return t;
      t = t.right;
    }
    return t;
  }

  add(lastDeleted) {
    if (!lastDeleted.left) this.head = lastDeleted;
    else lastDeleted.left.right = lastDeleted;

    if (!lastDeleted.right) this.tail = lastDeleted;
    else lastDeleted.right.left = lastDeleted;

    this.size++;
  }

  delete(selected) {
    if (!selected.right) this.tail = selected.left;
    else selected.right.left = selected.left;

    if (!selected.left) this.head = selected.right;
    else selected.left.right = selected.right;

    this.size--;
    return selected.right || selected.left;
  }

  print(n) {
    const arr = Array(n).fill("X");
    let t = this.head;
    for (let i = 0; i < this.size; i++) {
      arr[t.value] = "O";
      t = t.right;
    }
    return arr.join("");
  }
}

function solution(n, k, cmd) {
  var answer = "";

  const stack = [];
  const list = new LinkedList();

  for (let i = 0; i < n; i++) {
    list.insert(i);
  }
  let selected = list.findTarget(k);

  for (let command of cmd) {
    const [letter, num] = command.split(" ");
    const number = Number(num);

    if (letter === "U") {
      selected = list.findTargetToUp(selected, number);
    } else if (letter === "D") {
      selected = list.findTargetToDown(selected, number);
    } else if (letter === "C") {
      stack.push(selected);
      selected = list.delete(selected);
    } else {
      const lastDeleted = stack.pop();
      list.add(lastDeleted);
    }
  }

  answer = list.print(n);
  return answer;
}

/*
나의 패인
1. print 메소드를 잘못 만듦
2. stack이니까 가장 마지막에 삽입된 노드들부터 add되는데 이상한 예외 생각함(노드 1이 삭제된 후 노드 2 삭제한 다음 노드 1을 add하려면? <- 있을 수 없는 일)

인사이트
- 링크드리스트의 노드 자체를 stack에 쌓는 것 <- index 같은걸 고민할 필요가 없음
*/

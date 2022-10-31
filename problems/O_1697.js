const fs = require("fs");
const [n, k] = fs.readFileSync(0).toString().split(" ").map(Number);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
}

const BFS = (startPosition, targetPosition) => {
  const MAXPOSITION = 100000 * 2;
  const queue = new Queue();
  const visited = new Array(MAXPOSITION + 1).fill(0);
  queue.enqueue([startPosition, 0]);
  while (queue.size) {
    let [curPosition, curTime] = queue.dequeue();
    if (curPosition === targetPosition) {
      return curTime;
    }
    visited[curPosition] = 1;
    if (visited[curPosition - 1] === 0)
      queue.enqueue([curPosition - 1, curTime + 1]);
    if (visited[curPosition + 1] === 0)
      queue.enqueue([curPosition + 1, curTime + 1]);
    if (visited[curPosition * 2] === 0)
      queue.enqueue([curPosition * 2, curTime + 1]);
  }
};
console.log(BFS(n, k));

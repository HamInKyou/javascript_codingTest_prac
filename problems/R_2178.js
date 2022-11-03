const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = inputData.shift().split(" ").map(Number);
const miroMap = inputData.map((row) => row.split("").map(Number));

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
  enqueue(newValue) {
    const newNode = new Node(newValue);
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

const dArr = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const BFS = (startY, startX) => {
  const queue = new Queue();
  queue.enqueue([startY, startX, 0]);
  while (queue.size) {
    const [y, x, cnt] = queue.dequeue();
    if (y === n - 1 && x === m - 1) {
      return cnt + 1;
    }
    for (let i = 0; i < dArr.length; i++) {
      let nextY = y + dArr[i][0];
      let nextX = x + dArr[i][1];
      if (nextY < 0 || nextY >= n || nextX < 0 || nextX >= m) {
        continue;
      }
      if (!miroMap[nextY][nextX]) continue;
      queue.enqueue([nextY, nextX, cnt + 1]);
      miroMap[nextY][nextX] = 0; //방문처리 (BFS는 넣을 때 방문처리를 해줘야한다!)
    }
  }
};

console.log(BFS(0, 0));

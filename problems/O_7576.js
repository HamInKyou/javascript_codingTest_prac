const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const [M, N] = inputData.shift().split(" ").map(Number);
const box = inputData.map((row) => row.split(" ").map(Number));

const dArr = [
  [-1, 0], //상
  [1, 0], //하
  [0, -1], //좌
  [0, 1], //우
];

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

const checkIsOk = (y, x) => {
  if (y < 0 || y >= N) return false;
  if (x < 0 || x >= M) return false;
  if (box[y][x] !== 0) return false;
  return true;
};

let lastDay = 0;
const BFS = (queue) => {
  while (queue.size) {
    let [curY, curX, curDay] = queue.dequeue();
    for (let [dy, dx] of dArr) {
      let [nextY, nextX] = [curY + dy, curX + dx];
      if (checkIsOk(nextY, nextX)) {
        queue.enqueue([nextY, nextX, curDay + 1]);
        box[nextY][nextX] = 1;
        if (lastDay < curDay + 1) lastDay = curDay + 1;
      }
    }
  }
};

const queue = new Queue();
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) queue.enqueue([i, j, 0]);
  }
}
BFS(queue);
if (new Set(box.flat()).has(0)) {
  console.log(-1);
} else {
  console.log(lastDay);
}

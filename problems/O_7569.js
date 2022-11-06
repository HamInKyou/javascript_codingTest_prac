const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [M, N, H] = inputData.shift().split(" ").map(Number);

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
    const returnValue = this.head.value;
    this.head = this.head.next;
    this.size--;
    return returnValue;
  }
}

const makeBoxs3D = (arr) => {
  const result = [];
  for (let i = 0; i < H; i++) {
    let box2D = arr
      .slice(i * N, (i + 1) * N)
      .map((row) => row.split(" ").map(Number));
    result.push(box2D);
  }
  return result;
};
const boxes = makeBoxs3D(inputData);

const darr = [
  [-1, 0, 0], //위
  [1, 0, 0], //아래
  [0, 0, 1], //동
  [0, 0, -1], //서
  [0, 1, 0], //남
  [0, -1, 0], //북
];

const checkIsOk = (z, y, x) => {
  if (z < 0 || z >= H) return false;
  if (y < 0 || y >= N) return false;
  if (x < 0 || x >= M) return false;
  if (boxes[z][y][x] !== 0) return false;
  return true;
};

let lastDay = 0;
const BFS = (queue) => {
  while (queue.size) {
    let [curZ, curY, curX, curDay] = queue.dequeue();
    for (let [dz, dy, dx] of darr) {
      let [nextZ, nextY, nextX] = [curZ + dz, curY + dy, curX + dx];
      if (checkIsOk(nextZ, nextY, nextX)) {
        queue.enqueue([nextZ, nextY, nextX, curDay + 1]);
        if (lastDay < curDay + 1) lastDay = curDay + 1;
        boxes[nextZ][nextY][nextX] = 1;
      }
    }
  }
};

const queue = new Queue();
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (boxes[i][j][k] === 1) {
        queue.enqueue([i, j, k, 0]);
      }
    }
  }
}
BFS(queue);
if (new Set(boxes.flat(2)).has(0)) {
  console.log(-1);
} else {
  console.log(lastDay);
}

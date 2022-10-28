const fs = require("fs");
const [t, ...inputData] = fs.readFileSync(0).toString().trim().split("\n");

class Node {
  constructor(newValue) {
    this.value = newValue;
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

const DARR = [
  [-1, 0], //북
  [0, 1], //동
  [1, 0], //남
  [0, -1], //서
];

//문제 푸는 부분
const solution = (n, m, field) => {
  let worm = 0;
  const bfs = (startY, startX) => {
    const queue = new Queue();
    queue.enqueue([startY, startX]);

    while (queue.size) {
      let [y, x] = queue.dequeue();
      if (!field[y][x]) continue;
      else field[y][x] = 0;

      for (let i = 0; i < 4; i++) {
        let yPos = y + DARR[i][0];
        let xPos = x + DARR[i][1];

        if (yPos < 0 || xPos < 0 || yPos >= n || xPos >= m) continue;
        if (field[yPos][xPos]) queue.enqueue([yPos, xPos]);
      }
    }
  };

  for (let k = 0; k < n; k++) {
    for (let l = 0; l < m; l++) {
      if (field[k][l]) {
        bfs(k, l);
        worm++;
      }
    }
  }
  return worm;
};

const results = [];
for (let testIdx = 0; testIdx < Number(t); testIdx++) {
  let [m, n, k] = inputData[0].split(" ").map(Number);
  let points = inputData
    .slice(1, k + 1)
    .map((point) => point.split(" ").map(Number));

  let field = Array.from(new Array(n), () => new Array(m).fill(0));
  for (let pointIdx = 0; pointIdx < points.length; pointIdx++) {
    let point = points[pointIdx];
    field[point[1]][point[0]] = 1;
  }
  results.push(solution(n, m, field));
  inputData.splice(0, k + 1);
}

console.log(results.join("\n"));

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = inputData.shift().split(" ").map(Number);
const fieldMap = inputData.map((row) => row.split("").map(Number));
const visited = Array.from(new Array(N), () =>
  Array.from(new Array(M), () => [0, 0])
);

const STARTPOINT = [0, 0];
const ENDPOINT = [N - 1, M - 1];

const DARR = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
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
  enqueue(newValue) {
    let newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  dequeue() {
    let returnValue = this.head.value;
    this.head = this.head.next;
    this.size--;
    return returnValue;
  }
}

function visit(y, x, hasBeenBreak) {
  visited[y][x][hasBeenBreak] = 1;
}
function isVisited(y, x, hasBeenBreak) {
  return visited[y][x][hasBeenBreak] === 1;
}

function isWall(y, x) {
  return fieldMap[y][x] === 1;
}

function isInFieldMap(y, x) {
  if (y < 0 || y >= N || x < 0 || x >= M) return false;
  return true;
}

function BFS(startPoint) {
  const queue = new Queue();
  queue.enqueue([startPoint, 1, 0]);
  visit(startPoint[0], startPoint[1], 0);

  while (queue.size > 0) {
    let [[curY, curX], curDist, hasBeenBreak] = queue.dequeue();
    if (curY === ENDPOINT[0] && curX === ENDPOINT[1]) return curDist;

    for (let [dy, dx] of DARR) {
      let [nextY, nextX] = [curY + dy, curX + dx];
      if (!isInFieldMap(nextY, nextX)) continue;
      if (isVisited(nextY, nextX, hasBeenBreak)) continue;
      if (isWall(nextY, nextX) && hasBeenBreak) continue;
      if (isWall(nextY, nextX) && !hasBeenBreak) {
        queue.enqueue([[nextY, nextX], curDist + 1, 1]);
        visit(nextY, nextX, 1);
        continue;
      }
      queue.enqueue([[nextY, nextX], curDist + 1, hasBeenBreak]);
      visit(nextY, nextX, hasBeenBreak);
    }
  }
  return -1;
}

const result = BFS(STARTPOINT);
console.log(result);

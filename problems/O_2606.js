const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

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
    const returnValue = this.head.value;
    this.head = this.head.next;
    this.size--;
    return returnValue;
  }
}

const computerN = Number(inputData.shift());
const edgeN = Number(inputData.shift());
const edges = inputData.map((edge) => edge.split(" ").map(Number));

const graph = Array.from(new Array(computerN + 1), () => []);
for (let i = 0; i < edgeN; i++) {
  let [from, to] = edges[i];
  graph[from].push(to);
  graph[to].push(from);
}

const BFS = (startComputer) => {
  const queue = new Queue();
  const visited = new Array(computerN + 1).fill(0);
  let cnt = 0;
  queue.enqueue(startComputer);
  visited[startComputer] = 1;
  while (queue.size) {
    let curComputer = queue.dequeue();
    for (let i = 0; i < graph[curComputer].length; i++) {
      if (visited[graph[curComputer][i]]) continue;
      queue.enqueue(graph[curComputer][i]);
      visited[graph[curComputer][i]] = 1;
      cnt++;
    }
  }
  return cnt;
};

console.log(BFS(1));

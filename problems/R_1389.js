const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split("\n");
const [n, m] = inputData.shift().split(" ").map(Number);
const edges = inputData.map((edge) => edge.split(" ").map(Number));

const graph = Array.from(new Array(n + 1), () => []);
for (let i = 0; i < m; i++) {
  let [nodeA, nodeB] = edges[i];
  graph[nodeA].push(nodeB);
  graph[nodeB].push(nodeA);
}

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

const kevinBaconArr = [];
//BFS
const BFS = (node) => {
  let kevinBacon = 0;
  let visited = new Array(n + 1).fill(0);
  const queue = new Queue();
  let level = 0;
  queue.enqueue([node, level]);
  while (queue.size) {
    let [curNode, curLevel] = queue.dequeue();
    if (visited[curNode]) continue;
    visited[curNode] = 1;
    kevinBacon += curLevel;
    for (let i = 0; i < graph[curNode].length; i++) {
      let nextNode = graph[curNode][i];
      if (visited[nextNode]) continue;
      queue.enqueue([nextNode, curLevel + 1]);
    }
  }
  kevinBaconArr.push(kevinBacon);
};

const member = Array.from(new Array(n), (_, k) => k + 1);

for (let i = 0; i < n; i++) {
  BFS(member[i]);
}

const result = kevinBaconArr.indexOf(Math.min(...kevinBaconArr)) + 1;
console.log(result);

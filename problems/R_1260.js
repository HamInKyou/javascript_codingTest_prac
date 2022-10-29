const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split("\n");
const [n, m, v] = inputData.shift().split(" ").map(Number);
const edges = inputData.map((edge) => edge.split(" ").map(Number));

//그래프 생성
const graph = Array.from(new Array(n + 1), () => []);
for (let i = 0; i < m; i++) {
  let [nodeA, nodeB] = edges[i];
  graph[nodeA].push(nodeB);
  graph[nodeB].push(nodeA);
}
graph.forEach((edge) => edge.sort((a, b) => a - b));

const visited = new Array(n + 1).fill(0);

//DFS
const DFS_answer = [];
const DFS = (node) => {
  if (visited[node]) return;
  visited[node] = 1;
  DFS_answer.push(node);
  for (let i = 0; i < graph[node].length; i++) {
    let nextNode = graph[node][i];
    if (visited[nextNode] === 0) {
      DFS(nextNode);
    }
  }
};
DFS(v);
console.log(DFS_answer.join(" "));

//BFS
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

const BFS_answer = [];
visited.fill(0);
const BFS = (node) => {
  const queue = new Queue();
  queue.enqueue(node);
  while (queue.size) {
    let curNode = queue.dequeue();
    if (visited[curNode]) continue;
    visited[curNode] = 1;
    BFS_answer.push(curNode);
    for (let i = 0; i < graph[curNode].length; i++) {
      let nextNode = graph[curNode][i];
      if (visited[nextNode]) continue;
      queue.enqueue(nextNode);
    }
  }
};
BFS(v);
console.log(BFS_answer.join(" "));

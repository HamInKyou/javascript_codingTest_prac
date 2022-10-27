const fs = require("fs");
const [n, k] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

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
  printQueue() {
    let result = "";
    let curNode = this.head;
    while (curNode) {
      result += ` ${curNode.value}`;
      curNode = curNode.next;
    }
    console.log(result);
  }
}

const circleQueue = new Queue();
const nums = Array.from(new Array(n), (_, k) => k + 1);
for (let i = 0; i < n; i++) {
  circleQueue.enqueue(nums[i]);
}

let count = 0;
const result = [];
while (circleQueue.size) {
  let curNum = circleQueue.dequeue();
  count++;
  if (count % k === 0) {
    result.push(curNum);
  } else {
    circleQueue.enqueue(curNum);
  }
}
console.log(`<${result.join(", ")}>`);

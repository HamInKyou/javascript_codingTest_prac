const fs = require("fs");
const [n, ...inputData] = fs.readFileSync(0).toString().split("\n").map(Number);

class MinHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1;
    let parent = Math.floor(cur / 2);

    while (cur > 1 && this.heap[parent] > this.heap[cur]) {
      [this.heap[cur], this.heap[parent]] = [this.heap[parent], this.heap[cur]];
      cur = parent;
      parent = Math.floor(cur / 2);
    }
  }
  pop() {
    const returnValue = this.heap[1];
    if (this.size() === 1) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let cur = 1;
    let left = 2;
    let right = 3;

    while (
      this.heap[cur] > this.heap[left] ||
      this.heap[cur] > this.heap[right]
    ) {
      if (this.heap[left] > this.heap[right]) {
        [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
        cur = right;
      } else {
        [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
        cur = left;
      }
      left = cur * 2;
      right = cur * 2 + 1;
    }

    return returnValue;
  }
  size() {
    return this.heap.length - 1;
  }
}
const result = [];
const minHeap = new MinHeap();
for (let i = 0; i < n; i++) {
  if (inputData[i] === 0) {
    result.push(minHeap.size() ? minHeap.pop() : 0);
    continue;
  }
  minHeap.push(inputData[i]);
}

console.log(result.join("\n"));

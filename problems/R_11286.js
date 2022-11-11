const fs = require("fs");
const [N, ...inputData] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class Priority_Queue {
  constructor(compare) {
    this.heap = [null];
    this.compare = compare;
  }

  push(newValue) {
    this.heap.push(newValue);
    let cur = this.size();
    let parent = Math.floor(cur / 2);

    while (cur > 1 && this.compare(this.heap[parent], this.heap[cur])) {
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
      this.compare(this.heap[cur], this.heap[left]) ||
      this.compare(this.heap[cur], this.heap[right])
    ) {
      if (this.compare(this.heap[left], this.heap[right])) {
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

const absMinHeap = new Priority_Queue((a, b) =>
  Math.abs(a) === Math.abs(b) ? a > b : Math.abs(a) > Math.abs(b)
);
const result = [];
for (let i = 0; i < N; i++) {
  if (inputData[i] === 0) {
    result.push(absMinHeap.size() > 0 ? absMinHeap.pop() : 0);
    continue;
  }
  absMinHeap.push(inputData[i]);
}
console.log(result.join("\n"));

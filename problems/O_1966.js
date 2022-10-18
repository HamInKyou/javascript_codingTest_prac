const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const t = Number(inputData.shift());

class Queue {
  constructor(initialList) {
    this.queue = [...initialList];
    this.front = 0;
    this.rear = initialList.length;
  }

  enqueue(newValue) {
    this.queue[this.rear++] = newValue;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}

for (let i = 0; i < t; i++) {
  let [_, m] = inputData[i * 2].split(" ").map(Number);
  let documentQueue = new Queue(inputData[i * 2 + 1].split(" ").map(Number));
  let count = 0;
  let currentDocument = 0;

  while (true) {
    currentDocument = documentQueue.dequeue();

    let isNeedGoToBack = documentQueue.queue.find(
      (document) => document > currentDocument
    );

    if (isNeedGoToBack) {
      m = m === 0 ? documentQueue.size() : m - 1;
      documentQueue.enqueue(currentDocument);
    } else {
      count++;
      m--;
      if (m < 0) {
        break;
      }
    }
  }
  console.log(count);
}

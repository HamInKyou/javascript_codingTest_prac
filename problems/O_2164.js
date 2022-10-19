const fs = require("fs");
const n = Number(fs.readFileSync(0));

class Queue {
  constructor(initialValues) {
    this.queue = [...initialValues];
    this.front = 0;
    this.rear = initialValues.length || 0;
  }

  enqueue(newValue) {
    this.queue[this.rear++] = newValue;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }
  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue(Array.from(new Array(n), (_, k) => k + 1));

while (queue.size() > 1) {
  queue.dequeue();
  queue.enqueue(queue.dequeue());
}
console.log(queue.dequeue());

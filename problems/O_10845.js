const fs = require("fs");
const [n, ...commandDatas] = fs.readFileSync(0).toString().trim().split("\n");

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
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
const commandsResult = [];
const queue = new Queue();
for (let i = 0; i < Number(n); i++) {
  let [commandStr, commandNum] = commandDatas[i].split(" ");
  switch (commandStr) {
    case "push":
      queue.enqueue(commandNum);
      break;
    case "pop":
      commandsResult.push(queue.size() > 0 ? queue.dequeue() : -1);
      break;
    case "size":
      commandsResult.push(queue.size());
      break;
    case "empty":
      commandsResult.push(queue.size() > 0 ? 0 : 1);
      break;
    case "front":
      commandsResult.push(queue.size() > 0 ? queue.queue[queue.front] : -1);
      break;
    case "back":
      commandsResult.push(queue.size() > 0 ? queue.queue[queue.rear - 1] : -1);
      break;
  }
}
console.log(commandsResult.join("\n"));

const fs = require("fs");
const [n, ...commandDatas] = fs.readFileSync(0).toString().trim().split("\n");

class Deque {
  constructor() {
    this.deque = [];
    this.front = 0;
    this.rear = 0;
  }

  pushFront(value) {
    this.deque.splice(this.front, 0, value);
    this.rear++;
  }
  pushRear(value) {
    this.deque[this.rear++] = value;
  }

  popFront() {
    const value = this.deque[this.front];
    delete this.deque[this.front];
    this.front += 1;
    return value;
  }

  popRear() {
    const value = this.deque[--this.rear];
    delete this.deque[this.rear];
    return value;
  }
  size() {
    return this.rear - this.front;
  }
}

const commandsResult = [];
const deque = new Deque();
for (let i = 0; i < Number(n); i++) {
  let [commandStr, commandNum] = commandDatas[i].split(" ");
  switch (commandStr) {
    case "push_front":
      deque.pushFront(commandNum);
      break;
    case "push_back":
      deque.pushRear(commandNum);
      break;
    case "pop_front":
      commandsResult.push(deque.size() > 0 ? deque.popFront() : -1);
      break;
    case "pop_back":
      commandsResult.push(deque.size() > 0 ? deque.popRear() : -1);
      break;
    case "size":
      commandsResult.push(deque.size());
      break;
    case "empty":
      commandsResult.push(deque.size() > 0 ? 0 : 1);
      break;
    case "front":
      commandsResult.push(deque.size() > 0 ? deque.deque[deque.front] : -1);
      break;
    case "back":
      commandsResult.push(deque.size() > 0 ? deque.deque[deque.rear - 1] : -1);
      break;
    default:
      continue;
  }
}
console.log(commandsResult.join("\n"));

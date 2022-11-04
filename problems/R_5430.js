const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const T = Number(inputData.shift());

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

const doCommand = (p, deque) => {
  let is2RightDirection = true;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "R") {
      is2RightDirection = !is2RightDirection;
      continue;
    }
    if (p[i] === "D") {
      if (deque.size()) {
        if (is2RightDirection) {
          deque.popFront();
        } else {
          deque.popRear();
        }
      } else {
        return "error";
      }
    }
  }
  let filteredDeque = deque.deque.filter((el) => Number.isNaN);
  if (!is2RightDirection) {
    return `[${filteredDeque.reverse().join(",")}]`;
  }
  return `[${filteredDeque.join(",")}]`;
};

const result = [];
for (let i = 0; i < T; i++) {
  let p = inputData[i * 3];
  let deque = new Deque();
  let arr = inputData[i * 3 + 2].slice(1, -1).split(",");
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== "") deque.pushRear(arr[j]);
  }
  result.push(doCommand(p, deque));
}
console.log(result.join("\n"));

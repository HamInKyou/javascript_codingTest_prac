//JS로 못풀음 -> 입력시 메모리 초과 (파이썬으로 해결)
const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const T = Number(inputData.shift());

const testCases = [];
let kIndex = 0;
for (let i = 0; i < T; i++) {
  let k = Number(inputData[kIndex]);
  testCases.push(inputData.slice(kIndex + 1, kIndex + k + 1));
  kIndex = kIndex + k + 1;
}

//우선순위 큐
class Priority_Queue {
  constructor(compare) {
    this.heap = [null];
    this.compare = compare;
  }
  push(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1;
    let parent = Math.floor(cur / 2);

    while (cur > 1 && this.compare(this.heap[parent], this.heap[cur])) {
      [this.heap[parent], this.heap[cur]] = [this.heap[cur], this.heap[parent]];
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
  isEmpty() {
    return this.size() === 0;
  }
  top() {
    return this.heap[1];
  }
}

const doTest = (testCase) => {
  let maxHeap = new Priority_Queue((a, b) => a < b);
  let minHeap = new Priority_Queue((a, b) => a > b);
  let valid = {};
  for (let i = 0; i < testCase.length; i++) {
    let commandRow = testCase[i].split(" ");
    let [command, number] = [commandRow[0], Number(commandRow[1])];

    if (command === "I") {
      maxHeap.push(number);
      minHeap.push(number);
      if (valid[number]) valid[number]++;
      else valid[number] = 1;
      continue;
    }
    if (command === "D") {
      if (number === 1) {
        //큰거 지우기
        while (!maxHeap.isEmpty()) {
          let item = maxHeap.pop();
          if (valid[item] > 0) {
            //지울 수 있는거였다면
            valid[item]--;
            break; //지우고 끝내기
          }
        }
        continue; //이미 지워졌던 거라면 지우고 패스
      }
      if (number === -1) {
        //작은거 지우기
        while (!minHeap.isEmpty()) {
          let item = minHeap.pop();
          if (valid[item] > 0) {
            //지울 수 있는거였다면
            valid[item]--;
            break; //지우고 끝내기
          }
        }
        continue; //이미 지워졌던 거라면 지우고 패스
      }
    }
  }
  while (!maxHeap.isEmpty() && valid[maxHeap.top()] === 0) {
    //최소힙에 의해 지워졌던거 최대 힙에서 지우기
    maxHeap.pop();
  }
  while (!minHeap.isEmpty() && valid[minHeap.top()] === 0) {
    //최대힙에 의해 지워졌던거 최소 힙에서 지우기
    minHeap.pop();
  }
  if (minHeap.isEmpty() && maxHeap.isEmpty()) {
    return "EMPTY";
  } else {
    return `${maxHeap.heap[1]} ${minHeap.heap[1]}`;
  }
};

const result = [];
for (let i = 0; i < T; i++) {
  result.push(doTest(testCases[i]));
}
console.log(result.join("\n"));

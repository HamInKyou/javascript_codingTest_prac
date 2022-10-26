//계수정렬 문제 -> 입력자체부터 배열을 만들기 때문에 메모리 넘어감
const fs = require("fs");
const [n, ...inputData] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const MAXNUM = 10000;
const counter = new Array(MAXNUM + 1).fill(0);

for (let i = 0; i < n; i++) {
  counter[inputData[i]]++;
}

for (let i = 0; i < counter.length; i++) {
  if (counter[i]) {
    for (let j = 0; j < counter[i]; j++) {
      console.log(i);
    }
  }
}

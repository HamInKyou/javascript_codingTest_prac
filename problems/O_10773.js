const fs = require("fs");
const [k, ...inputData] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const stack = [];
for (let i = 0; i < k; i++) {
  if (inputData[i] === 0) {
    stack.pop();
    continue;
  }
  stack.push(inputData[i]);
}
console.log(stack.reduce((acc, cur) => acc + cur, 0));

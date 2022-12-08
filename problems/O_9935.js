const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const targetArr = inputData[0].split("");
const bombArr = inputData[1].split("");

const stack = [];

function stackHasBomb() {
  const stackSize = stack.length;
  for (let cursor = 0; cursor < bombArr.length; cursor++) {
    if (stack[stackSize - 1 - cursor] !== bombArr[bombArr.length - 1 - cursor])
      return false;
  }
  return true;
}
for (let c of targetArr) {
  stack.push(c);
  if (!stackHasBomb()) continue;
  for (let i = 0; i < bombArr.length; i++) stack.pop();
}

console.log(stack.length > 0 ? stack.join("") : "FRULA");

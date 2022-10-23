const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const t = Number(inputData.shift());

for (let i = 0; i < t; i++) {
  let targetStr = inputData[i];
  let stack = [];
  let result = true;
  for (let j = 0; j < targetStr.length; j++) {
    let c = targetStr[j];
    if (c === "(") {
      stack.push(c);
      continue;
    }
    if (c === ")") {
      if (stack.pop() !== "(") {
        result = false;
        break;
      }
    }
  }
  if (stack.length > 0) {
    result = false;
  }
  console.log(result ? "YES" : "NO");
}

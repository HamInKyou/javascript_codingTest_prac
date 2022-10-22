const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < inputData.length - 1; i++) {
  let stack = [];
  let result = true;
  for (let j = 0; j < inputData[i].length; j++) {
    let c = inputData[i][j];
    let top = stack[stack.length - 1];
    if (c === "(" || c === "[") {
      stack.push(c);
      continue;
    }
    if (c === ")" && top !== "(") {
      result = false;
      break;
    }
    if (c === "]" && top !== "[") {
      result = false;
      break;
    }
    if (c === ")" || c === "]") {
      stack.pop();
    }
  }
  if (stack.length > 0) {
    result = false;
  }
  console.log(result ? "yes" : "no");
}

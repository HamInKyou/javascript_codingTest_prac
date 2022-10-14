const fs = require("fs");
const [n, ...targetArr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const stack = [];
const answer = [];
let curNum = 1;
let flag = 0;
for (let i = 0; i < n; i++) {
  let target = targetArr.shift();

  while (curNum <= target) {
    stack.push(curNum++);
    answer.push("+");
  }
  if (stack[stack.length - 1] === target) {
    stack.pop();
    answer.push("-");
    continue;
  }
  flag = 1;
  break;
}

if (flag) console.log("NO");
else console.log(answer.join("\n"));

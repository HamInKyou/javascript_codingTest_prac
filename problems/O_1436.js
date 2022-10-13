const fs = require("fs");
const n = Number(fs.readFileSync(0));

let count = 0;
let curNum = 0;
while (true) {
  if (curNum.toString().includes("666")) {
    count += 1;
  }
  if (count === n) {
    break;
  }
  curNum++;
}
console.log(curNum);

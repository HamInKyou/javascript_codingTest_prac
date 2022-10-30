const fs = require("fs");
const expression = fs.readFileSync(0).toString();

const result = expression.split("-").reduce((acc, cur, idx) => {
  let curSum = cur
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  if (idx === 0) {
    return curSum;
  } else {
    return acc - curSum;
  }
}, 0);
console.log(result);

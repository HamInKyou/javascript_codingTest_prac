const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const nums = inputData[1].split(" ").map(Number);

const maxNum = Math.max(...nums);
const fieldArr = Array.from(new Array(maxNum + 1), (_, k) => k);
fieldArr[0] = fieldArr[1] = -1;

for (let i = 2; i <= Math.sqrt(maxNum); i++) {
  if (fieldArr[i] < 0) {
    continue;
  }
  let j = 2;
  while (i * j <= maxNum) {
    fieldArr[i * j] = -1;
    j++;
  }
}

const primaryNums = new Set(fieldArr.filter((num) => num > 0));
const result = nums.reduce(
  (acc, cur) => (primaryNums.has(cur) ? acc + 1 : acc),
  0
);
console.log(result);

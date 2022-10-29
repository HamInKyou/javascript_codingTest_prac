const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split("\n");
const n = Number(inputData[0]);
const m = Number(inputData[1]);
const btns = m > 0 ? new Set(inputData[2].split(" ").map(Number)) : new Set();

const STARTCHANNEL = 100;
let initialMinCount = n >= STARTCHANNEL ? n - STARTCHANNEL : STARTCHANNEL - n;
let minCount = initialMinCount;
const checkNumber = (number) => {
  let nums = number.toString();
  for (let i = 0; i < nums.length; i++) {
    if (btns.has(Number(nums[i]))) {
      return;
    }
  }
  let count = Math.abs(n - number) + nums.length;
  if (count < minCount) {
    minCount = count;
  }
};
for (let i = 0; i < initialMinCount; i++) {
  checkNumber(n + i);
  checkNumber(n - i);
}
console.log(minCount);

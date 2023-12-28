const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const max = Math.max(...inputData);
const maxIndex = inputData.indexOf(max);
const others = [
  ...inputData.slice(0, maxIndex),
  ...inputData.slice(maxIndex + 1),
];

const otherSum = others.reduce((acc, cur) => acc + cur, 0);
const result = otherSum > max ? otherSum + max : otherSum + otherSum - 1;

console.log(result);

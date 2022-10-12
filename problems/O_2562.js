const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const max = Math.max(...inputData);
const maxIndex = inputData.findIndex((data) => data === max) + 1;

console.log(max);
console.log(maxIndex);

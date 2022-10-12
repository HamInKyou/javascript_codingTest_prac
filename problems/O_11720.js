const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const nums = inputData[1].split("").map(Number);
const result = nums.reduce((acc, cur) => acc + cur);
console.log(result);

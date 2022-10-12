const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const nums = inputData[1].split(" ").map(Number);

const max = Math.max(...nums);
const min = Math.min(...nums);

console.log(min, max);

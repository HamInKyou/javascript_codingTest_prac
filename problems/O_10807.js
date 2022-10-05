const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(inputData[0]);
const arr = inputData[1].split(" ").map(Number);
const v = Number(inputData[2]);

const result = arr.filter((item) => item === v).length;
console.log(result);

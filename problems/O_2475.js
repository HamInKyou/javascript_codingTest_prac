const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const squareSum = inputData.reduce((acc, cur) => acc + cur ** 2, 0);
const result = squareSum % 10;
console.log(result);

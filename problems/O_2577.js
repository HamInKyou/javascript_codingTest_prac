const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const resultArr = new Array(10).fill(0);
const sumInputData = inputData.reduce((acc, cur) => acc * cur, 1).toString();

for (let i = 0; i < sumInputData.length; i++) {
  resultArr[Number(sumInputData[i])] += 1;
}
console.log(resultArr.join("\n"));

const fs = require("fs");
const inputData = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const result = {
  maxNum: inputData[0][0],
  point: [1, 1],
};

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (inputData[i][j] > result.maxNum) {
      result.maxNum = inputData[i][j];
      result.point = [i + 1, j + 1];
    }
  }
}

console.log(result.maxNum);
console.log(result.point.join(" "));

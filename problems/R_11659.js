const fs = require("fs");
const inputdData = fs.readFileSync(0).toString().trim().split("\n");
const [N, _] = inputdData.shift().split(" ").map(Number);
const numArr = inputdData.shift().split(" ").map(Number);
const curSum = new Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  curSum[i + 1] = curSum[i] + numArr[i];
}

const testCases = inputdData.map((row) => row.split(" ").map(Number));
const result = testCases.map(([start, end]) => curSum[end] - curSum[start - 1]);
console.log(result.join("\n"));

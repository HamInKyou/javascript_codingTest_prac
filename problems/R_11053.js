const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = inputData[0];
const A = inputData[1].split(" ").map(Number);

const DP = Array.from(new Array(N).fill(0));

for (let i = 0; i < N; i++) {
  let targetNum = A[i];
  let smallerThanTargetNum = [];
  for (let j = 0; j <= i; j++) {
    let curNum = A[j];
    if (curNum < targetNum) {
      smallerThanTargetNum.push(DP[j]);
    }
  }
  if (smallerThanTargetNum.length === 0) {
    DP[i] = 1;
  } else {
    DP[i] = Math.max(...smallerThanTargetNum) + 1;
  }
}

console.log(Math.max(...DP));

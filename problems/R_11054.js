const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData[0]);
const A = inputData[1].split(" ").map(Number);

const increaseDP = new Array(N).fill(0);
const decreaseDP = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let temp = [];
  for (let j = 0; j <= i; j++) {
    if (A[i] > A[j]) {
      temp.push(increaseDP[j]);
    }
  }
  if (temp.length) {
    increaseDP[i] = Math.max(...temp) + 1;
  } else {
    increaseDP[i] = 1;
  }
}

for (let i = N - 1; i >= 0; i--) {
  let temp = [];
  for (let j = N - 1; j >= i; j--) {
    if (A[i] > A[j]) {
      temp.push(decreaseDP[j]);
    }
  }
  if (temp.length) {
    decreaseDP[i] = Math.max(...temp) + 1;
  } else {
    decreaseDP[i] = 1;
  }
}

const DP = [];
for (let i = 0; i < N; i++) {
  DP.push(increaseDP[i] + decreaseDP[i]);
}

console.log(Math.max(...DP) - 1);

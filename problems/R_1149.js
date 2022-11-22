const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData.shift());
const houses = inputData.map((house) => house.split(" ").map(Number));

const DP = Array.from(new Array(N + 1), () => new Array(3).fill(0));
DP[1] = houses[0];
for (let i = 2; i <= N; i++) {
  DP[i][0] = Math.min(DP[i - 1][1], DP[i - 1][2]) + houses[i - 1][0];
  DP[i][1] = Math.min(DP[i - 1][0], DP[i - 1][2]) + houses[i - 1][1];
  DP[i][2] = Math.min(DP[i - 1][0], DP[i - 1][1]) + houses[i - 1][2];
}
console.log(Math.min(...DP[N]));

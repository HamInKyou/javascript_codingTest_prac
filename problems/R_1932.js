const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData.shift());
const triangle = inputData.map((row) => row.split(" ").map(Number));

const DP = Array.from(new Array(N), () => []);
DP[0].push(triangle[0][0]);
for (let level = 1; level < N; level++) {
  DP[level].push(DP[level - 1][0] + triangle[level][0]);
  for (let i = 1; i < level; i++) {
    DP[level].push(
      Math.max(
        DP[level - 1][i - 1] + triangle[level][i],
        DP[level - 1][i] + triangle[level][i]
      )
    );
  }
  DP[level].push(DP[level - 1][level - 1] + triangle[level][level]);
}
console.log(Math.max(...DP[N - 1]));

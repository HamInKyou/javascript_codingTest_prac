const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData[0]);
const result = [];

const max_dp = [0, 0, 0];
const min_dp = [0, 0, 0];

const max_temp = [0, 0, 0];
const min_temp = [0, 0, 0];

for (let i = 1; i <= N; i++) {
  let [a, b, c] = inputData[i].split(" ").map(Number);

  max_temp[0] = a + Math.max(max_dp[0], max_dp[1]);
  max_temp[1] = b + Math.max(max_dp[0], max_dp[1], max_dp[2]);
  max_temp[2] = c + Math.max(max_dp[1], max_dp[2]);

  min_temp[0] = a + Math.min(min_dp[0], min_dp[1]);
  min_temp[1] = b + Math.min(min_dp[0], min_dp[1], min_dp[2]);
  min_temp[2] = c + Math.min(min_dp[1], min_dp[2]);

  for (let j = 0; j < 3; j++) {
    max_dp[j] = max_temp[j];
    min_dp[j] = min_temp[j];
  }
}

result.push(Math.max(...max_dp));
result.push(Math.min(...min_dp));

console.log(result.join(" "));

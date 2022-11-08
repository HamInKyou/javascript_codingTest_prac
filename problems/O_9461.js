const fs = require("fs");
const [_, ...nArr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const MAX = 100;
const dp = new Array(MAX + 1).fill(0);
dp[1] = dp[2] = dp[3] = 1;
dp[4] = dp[5] = 2;
for (let i = 6; i <= MAX; i++) {
  dp[i] = dp[i - 5] + dp[i - 1];
}

const result = nArr.map((n) => dp[n]);
console.log(result.join("\n"));

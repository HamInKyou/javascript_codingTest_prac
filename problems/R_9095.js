const fs = require("fs");
const [_, ...testCases] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const maxN = Math.max(...testCases);
const dp = new Array(maxN + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for (let i = 4; i <= maxN; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

const results = testCases.map((testCase) => dp[testCase]);
console.log(results.join("\n"));

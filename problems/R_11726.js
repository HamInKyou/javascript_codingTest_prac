const fs = require("fs");
const N = Number(fs.readFileSync(0));

const DP = new Array(N + 1).fill(0);
DP[1] = 1;
DP[2] = 2;

for (let i = 3; i <= N; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
}

console.log(DP[N]);

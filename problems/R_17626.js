const fs = require("fs");
const N = Number(fs.readFileSync(0));

const sqares = [];
for (let i = 1; i * i <= N; i++) {
  sqares.push(i * i);
}

const DP = new Array(N + 1).fill(0);
DP[1] = 1;
for (let i = 2; i <= N; i++) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let j = 1; j ** 2 <= i; j++) {
    min = Math.min(min, DP[i - j ** 2]);
  }
  DP[i] = min + 1;
}
console.log(DP[N]);

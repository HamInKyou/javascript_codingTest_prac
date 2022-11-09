const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, K] = inputData.shift().split(" ").map(Number);
const coins = inputData.map(Number);

let remainedWon = K;
let coinCnt = 0;
for (let i = N - 1; i >= 0; i--) {
  let v = coins[i];
  let q = Math.floor(remainedWon / v);
  if (q > 0) {
    coinCnt += q;
    remainedWon %= v;

    if (remainedWon === 0) {
      break;
    }
  }
}
console.log(coinCnt);

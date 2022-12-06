function solution(N, stickers) {
  const DP = [];
  DP[0] = [0, stickers[0][0], stickers[1][0]];
  for (let i = 1; i < N; i++) {
    let noChoice = Math.max(DP[i - 1][0], DP[i - 1][1], DP[i - 1][2]);
    let upChoice = Math.max(DP[i - 1][0], DP[i - 1][2]) + stickers[0][i];
    let downChoice = Math.max(DP[i - 1][0], DP[i - 1][1]) + stickers[1][i];
    DP.push([noChoice, upChoice, downChoice]);
  }
  return Math.max(...DP[N - 1]);
}

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const T = inputData.shift();

let curTestCase = 0;
let cursor = 0;
const result = [];
while (curTestCase < T) {
  const N = inputData[cursor];
  const stickers = [];
  for (let i = 1; i <= 2; i++) {
    stickers.push(inputData[cursor + i].split(" ").map(Number));
  }
  result.push(solution(N, stickers));
  cursor += 3;
  curTestCase++;
}
console.log(result.join("\n"));

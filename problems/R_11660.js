const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = inputData[0].split(" ").map(Number);

const DP = Array.from(new Array(N), () => new Array(N).fill(0));

let cursor = 1;
for (let i = 0; i < N; i++) {
  let row = inputData[cursor + i].split(" ").map(Number);
  if (i < 1) {
    DP[0][0] = row[0];
    for (let j = 1; j < N; j++) {
      DP[0][j] = DP[0][j - 1] + row[j];
    }
    continue;
  }
  DP[i][0] = DP[i - 1][0] + row[0];
  for (let j = 1; j < N; j++) {
    DP[i][j] = DP[i - 1][j] + DP[i][j - 1] - DP[i - 1][j - 1] + row[j];
  }
}
cursor += N;
const results = [];
for (let i = 0; i < M; i++) {
  let result = 0;
  let [x1, y1, x2, y2] = inputData[cursor + i]
    .split(" ")
    .map((item) => Number(item) - 1);
  result += DP[x2][y2];
  result -= x1 > 0 && DP[x1 - 1][y2];
  result -= y1 > 0 && DP[x2][y1 - 1];
  result += y1 > 0 && x1 > 0 && DP[x1 - 1][y1 - 1];
  results.push(result);
}
console.log(results.join("\n"));

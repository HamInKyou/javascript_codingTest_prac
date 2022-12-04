const fs = require("fs");
const N = Number(fs.readFileSync(0));

const result = Array.from(new Array(N), () => new Array(N * 2 - 1).fill(" "));

function makeSmallTriangle(topPosition) {
  const [topY, topX] = topPosition;
  result[topY][topX] = "*";
  result[topY + 1][topX - 1] = "*";
  result[topY + 1][topX + 1] = "*";
  for (let i = topX - 2; i <= topX + 2; i++) {
    result[topY + 2][i] = "*";
  }
}

function makeTriangle(topPosition, height) {
  const [topY, topX] = topPosition;
  if (height === 3) {
    makeSmallTriangle(topPosition);
    return;
  }
  let nextTop = topY + height / 2;
  makeTriangle(topPosition, height / 2);
  makeTriangle([nextTop, topX - height / 2], height / 2);
  makeTriangle([nextTop, topX + height / 2], height / 2);
}

makeTriangle([0, N - 1], N);
console.log(result.map((row) => row.join("")).join("\n"));

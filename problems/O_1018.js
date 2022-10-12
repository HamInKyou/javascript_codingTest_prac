const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = inputData[0].split(" ").map(Number);
const [_, ...board] = inputData;

const getReColorCount = (firstColor, startPoint) => {
  const [x, y] = startPoint;
  let currentColor = firstColor;
  let result = 0;
  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (board[i][j] !== currentColor) {
        result += 1;
      }
      currentColor = currentColor === "B" ? "W" : "B";
    }
    currentColor = currentColor === "B" ? "W" : "B";
  }
  return result;
};

let minResult = 64;
for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    let result1 = getReColorCount("B", [j, i]);
    minResult = result1 < minResult ? result1 : minResult;
    let result2 = getReColorCount("W", [j, i]);
    minResult = result2 < minResult ? result2 : minResult;
  }
}
console.log(minResult);

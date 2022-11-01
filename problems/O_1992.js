const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const initialSize = Number(inputData.shift());
const img = inputData.map((row) => row.split("").map(Number));
const result = [];

const checkCanExitRecursion = (y, x, startPixel, size) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (img[y + i][x + j] !== startPixel) {
        return false;
      }
    }
  }
  return true;
};

const recursion = (y, x, size) => {
  let startPixel = img[y][x];
  if (checkCanExitRecursion(y, x, startPixel, size)) {
    result.push(startPixel);
    return;
  }
  result.push("(");
  let next = size / 2;
  for ([nextY, nextX] of [
    [y, x],
    [y, x + next],
    [y + next, x],
    [y + next, x + next],
  ]) {
    recursion(nextY, nextX, next);
  }
  result.push(")");
  return;
};

recursion(0, 0, initialSize);
console.log(result.join(""));

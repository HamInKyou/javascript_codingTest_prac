const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [n, m, b] = inputData.shift().split(" ").map(Number);
const fieldMap = inputData.map((row) => row.split(" ").map(Number));

const flatField = fieldMap.flat();
const maxHeight = Math.max(...flatField);
const minHeight = Math.min(...flatField);
const currentHasBlock = flatField.reduce((acc, cur) => acc + cur, 0) + b;

const result = {
  time: Number.MAX_SAFE_INTEGER,
  height: Number.MIN_SAFE_INTEGER,
};

for (let curHeight = minHeight; curHeight <= maxHeight; curHeight++) {
  let curHeightTotalBlock = n * m * curHeight;
  let time = 0;
  if (curHeightTotalBlock > currentHasBlock) {
    break;
  }
  for (let i = 0; i < flatField.length; i++) {
    let heightDiff = 0;
    if (curHeight > flatField[i]) {
      heightDiff = curHeight - flatField[i];
      time += heightDiff * 1;
    } else {
      heightDiff = flatField[i] - curHeight;
      time += heightDiff * 2;
    }
  }
  if (time < result.time) {
    result.time = time;
    result.height = curHeight;
  } else if (time === result.time) {
    result.height = curHeight;
  }
}
console.log(result.time, result.height);

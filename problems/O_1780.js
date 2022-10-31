const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split("\n");
const n = Number(inputData.shift());
const matrix = inputData.map((row) => row.split(" ").map(Number));

const paperCnt = { zero: 0, one: 0, minusOne: 0 };

const checkMatrixHasOnlyOneType = (y, x, size, currentNum) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix[y + i][x + j] !== currentNum) return false;
    }
  }
  return true;
};

const divideMatrix = (y, x, size) => {
  let currentNum = matrix[y][x];
  if (checkMatrixHasOnlyOneType(y, x, size, currentNum)) {
    switch (currentNum) {
      case 0:
        paperCnt.zero++;
        break;
      case 1:
        paperCnt.one++;
        break;
      case -1:
        paperCnt.minusOne++;
        break;
    }
    return;
  }

  let nextSize = size / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      divideMatrix(y + nextSize * i, x + nextSize * j, nextSize);
    }
  }
};

divideMatrix(0, 0, n);

console.log(paperCnt.minusOne);
console.log(paperCnt.zero);
console.log(paperCnt.one);

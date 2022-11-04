const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const [WHITE, BLUE] = [0, 1];
const N = Number(inputData.shift());
const paper = inputData.map((row) => row.split(" ").map(Number));

let whiteCnt = 0;
let blueCnt = 0;

const checkAllSame = (pos, size, color) => {
  let [y, x] = pos;
  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (paper[i][j] !== color) return false;
    }
  }
  return true;
};
const recursion = (pos, size) => {
  let [startY, startX] = pos;
  let curColor = paper[startY][startX];
  if (checkAllSame(pos, size, curColor)) {
    if (curColor === BLUE) {
      blueCnt++;
      return;
    }
    if (curColor === WHITE) {
      whiteCnt++;
      return;
    }
  }
  let nextSize = size / 2;
  recursion([startY, startX], nextSize);
  recursion([startY, startX + nextSize], nextSize);
  recursion([startY + nextSize, startX], nextSize);
  recursion([startY + nextSize, startX + nextSize], nextSize);
};

recursion([0, 0], N);
console.log(whiteCnt);
console.log(blueCnt);

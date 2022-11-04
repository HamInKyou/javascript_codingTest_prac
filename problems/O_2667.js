const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(inputData.shift());
const fieldMap = inputData.map((row) => row.split("").map(Number));

const dArr = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const result = [];

const DFS = (y, x, curNum) => {
  fieldMap[y][x] = 0;
  result[curNum]++;
  for (let i = 0; i < 4; i++) {
    let [nextY, nextX] = [y + dArr[i][0], x + dArr[i][1]];
    if (nextY < 0 || nextY >= n || nextX < 0 || nextX >= n) continue;
    if (!fieldMap[nextY][nextX]) continue;
    DFS(nextY, nextX, curNum);
  }
};

let curNum = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (fieldMap[i][j]) {
      result.push(0);
      DFS(i, j, curNum);
      curNum++;
    }
  }
}
console.log(result.length);
console.log(result.sort((a, b) => a - b).join("\n"));

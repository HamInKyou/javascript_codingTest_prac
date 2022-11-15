const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = inputData.shift().split(" ").map(Number);

const paper = inputData.map((row) => row.split(" ").map(Number));

const dArr = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const result = [];
const DFS = ([prevY, prevX], [curY, curX], total, level) => {
  if (level === 4) {
    result.push(total);
    return;
  }
  for (let [dy, dx] of dArr) {
    let [nextY, nextX] = [curY + dy, curX + dx];
    if (nextY < 0 || nextY >= N || nextX < 0 || nextX >= M) continue;
    if (prevY === nextY && prevX === nextX) continue;
    DFS([curY, curX], [nextY, nextX], total + paper[nextY][nextX], level + 1);
  }
};

const dArrList = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, -1],
  ],
];
const NODFS = (y, x) => {
  for (let i = 0; i < 4; i++) {
    let dArr = dArrList[i];
    let flag = 1;
    let sum = 0;
    for (let [dy, dx] of dArr) {
      let [nextY, nextX] = [y + dy, x + dx];
      if (nextY < 0 || nextY >= N || nextX < 0 || nextX >= M) {
        flag = 0;
        break;
      }
      sum += paper[nextY][nextX];
    }
    if (flag) {
      result.push(sum);
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    DFS([-1, -1], [i, j], paper[i][j], 1);
    NODFS(i, j);
  }
}

console.log(Math.max(...result));

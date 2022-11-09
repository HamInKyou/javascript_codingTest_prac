const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData.shift());
const image = inputData.map((row) => row.split(""));

const dArr = [
  [-1, 0], //상
  [1, 0], //하
  [0, -1], //좌
  [0, 1], //우
];

const BFS = (startY, startX, curColors) => {
  const queue = [];
  const curColorsSet = new Set(curColors);
  queue.push([startY, startX]);
  visited[startY][startX] = 1;
  while (queue.length) {
    let [curY, curX] = queue.pop();
    for ([dy, dx] of dArr) {
      let [nextY, nextX] = [curY + dy, curX + dx];
      if (nextY < 0 || nextY >= N || nextX < 0 || nextX >= N) continue;
      if (visited[nextY][nextX]) continue;
      if (!curColorsSet.has(image[nextY][nextX])) continue;

      queue.push([nextY, nextX]);
      visited[nextY][nextX] = 1;
    }
  }
};

const result = [];
//적록색양 아닌 사람
let visited = Array.from(new Array(N), () => new Array(N).fill(0));
let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      BFS(i, j, image[i][j]);
      count++;
    }
  }
}
result.push(count);

//적록색양인 사람
visited = Array.from(new Array(N), () => new Array(N).fill(0));
count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      BFS(i, j, image[i][j] !== "B" ? ["R", "G"] : "B");
      count++;
    }
  }
}
result.push(count);

console.log(result.join(" "));

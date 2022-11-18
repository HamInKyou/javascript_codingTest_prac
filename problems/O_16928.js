const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = inputData.shift().split(" ").map(Number);
const ladder = {};
const snake = {};

for (let i = 0; i < N; i++) {
  let [from, to] = inputData[i].split(" ").map(Number);
  ladder[from] = to;
}
for (let i = N; i < N + M; i++) {
  let [from, to] = inputData[i].split(" ").map(Number);
  snake[from] = to;
}

const BFS = () => {
  const queue = [];
  const visited = new Array(100 + 1).fill(0);
  queue.push([1, 0]);
  visited[1] = 1;
  while (queue) {
    let [curPosition, curDiceCnt] = queue.shift();
    if (curPosition === 100) return curDiceCnt;
    for (let i = 1; i <= 6; i++) {
      let nextPosition = curPosition + i;
      if (nextPosition > 100) continue;
      if (ladder[nextPosition]) {
        nextPosition = ladder[nextPosition];
      } else if (snake[nextPosition]) {
        nextPosition = snake[nextPosition];
      }
      if (visited[nextPosition]) continue;
      queue.push([nextPosition, curDiceCnt + 1]);
      visited[nextPosition] = 1;
    }
  }
};

const result = BFS();
console.log(result);

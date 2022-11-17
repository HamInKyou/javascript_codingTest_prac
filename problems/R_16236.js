const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData.shift());
const field = inputData.map((row) => row.split(" ").map(Number));

let answer = 0;
const visited = Array.from(new Array(N), () => new Array(N).fill(0));

const visit = (y, x) => {
  visited[y][x] = 1;
};

const clearVisited = () => {
  visited.map((row) => {
    row.fill(0);
  });
};

const shark = {
  x: 0,
  y: 0,
  exp: 2,
  lv: 2,
};

let fishs = [];

const sortFishesPriority = (fishA, fishB) => {
  let [distanceA, distanceB] = [fishA.distance, fishB.distance];
  if (distanceA - distanceB !== 0) return distanceA - distanceB;
  if (fishA.y - fishB.y !== 0) return fishA.y - fishB.y;
  return fishA.x - fishB.x;
};

const dArr = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const BFS = (y, x) => {
  fishs = [];
  const queue = [];
  queue.push([y, x, 0]);
  while (queue.length) {
    let [curY, curX, curDistance] = queue.shift();

    for (let [dy, dx] of dArr) {
      let [nextY, nextX] = [curY + dy, curX + dx];
      if (nextY < 0 || nextY >= N || nextX < 0 || nextX >= N) continue;
      if (visited[nextY][nextX]) continue;
      if (field[nextY][nextX] > shark.lv) continue;
      queue.push([nextY, nextX, curDistance + 1]);
      visit(nextY, nextX);
      if (field[nextY][nextX] !== 0 && field[nextY][nextX] < shark.lv) {
        fishs.push({ y: nextY, x: nextX, distance: curDistance + 1 });
      }
    }
  }
};

const findSharkPosition = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (field[i][j] === 9) return [i, j];
    }
  }
};
const eatFish = ({ y: targetY, x: targetX, distance: targetDistance }) => {
  [shark.y, shark.x] = [targetY, targetX];
  field[shark.y][shark.x] = 0;
  answer += targetDistance;
  shark.exp--;
  if (shark.exp === 0) {
    shark.lv++;
    shark.exp = shark.lv;
  }
};

[shark.y, shark.x] = findSharkPosition();
field[shark.y][shark.x] = 0;
BFS(shark.y, shark.x);
while (fishs.length) {
  if (fishs.length === 1) {
    eatFish(fishs.shift());
  } else if (fishs.length > 1) {
    fishs.sort(sortFishesPriority);
    eatFish(fishs.shift());
  }
  clearVisited();
  BFS(shark.y, shark.x);
}

console.log(answer);

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = inputData.shift().split(" ").map(Number);

const fieldMap = inputData.map((row) => row.split(" ").map(Number));

const DARR = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const visited = Array.from(new Array(N), () => new Array(M).fill(0));

function clearVisited() {
  visited.forEach((row) => row.fill(0));
}

const CHEESE = 1;
const OUTAIR = 2;
const CHEESE_MELTED = 3;

function checkOUTAIR() {
  clearVisited();
  const queue = [];
  queue.push([0, 0]);
  visited[0][0] = 1;

  while (queue.length > 0) {
    let [y, x] = queue.shift();
    for (let [dy, dx] of DARR) {
      let [nextY, nextX] = [y + dy, x + dx];
      if (nextY < 0 || nextY >= N || nextX < 0 || nextX >= M) continue; //맵 벗어남
      if (visited[nextY][nextX]) continue; //이미 방문함 패쓰
      if (fieldMap[nextY][nextX] === CHEESE) continue; //치즈일 경우 패쓰
      visited[nextY][nextX] = 1; //방문처리하기
      fieldMap[nextY][nextX] = OUTAIR; //치즈 바깥쪽 공기임을 표시
      queue.push([nextY, nextX]);
    }
  }
}

function checkCanMelted(y, x) {
  let cnt = 0;
  for (let [dy, dx] of DARR) {
    let [nextY, nextX] = [y + dy, x + dx];
    if (fieldMap[nextY][nextX] === OUTAIR) cnt++;

    if (cnt >= 2) return true;
  }
  return false;
}

function removeMeltedCheese() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (fieldMap[i][j] === CHEESE_MELTED) fieldMap[i][j] = OUTAIR;
    }
  }
}

function ItHasLeftCheese() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (fieldMap[i][j] === CHEESE) return true;
    }
  }
  return false;
}

let totalTime = 0;
while (true) {
  let isMelt = false; //녹을 치즈가 있는지 체크
  checkOUTAIR(); //바깥쪽 공기 모두 표시하기

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      if (fieldMap[i][j] === 1) {
        //치즈일 경우
        if (checkCanMelted(i, j)) {
          //그 치즈가 녹을 수 있는 경우
          fieldMap[i][j] = CHEESE_MELTED;
          isMelt = true;
        }
      }
    }
  }

  if (isMelt) {
    //녹은 치즈가 있다면 다 지워버리기
    removeMeltedCheese();
  }
  totalTime++;
  if (!ItHasLeftCheese()) {
    //녹고 난 이후에 남아있는 치즈가 없다면
    break;
  }
}
console.log(totalTime);

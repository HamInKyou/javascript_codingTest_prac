const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const _ = Number(inputData.shift());
const testCases = inputData.map((testCase) => testCase.split(" ").map(Number));

const Dfunc = (from) => {
  let funcResult = from * 2;
  return funcResult > 9999 ? funcResult % 10000 : funcResult;
};

const Sfunc = (from) => {
  return from > 0 ? from - 1 : 9999;
};

const Lfunc = (from) => {
  if (from < 1000) {
    return from * 10;
  }
  let d1 = Math.floor(from / 1000);
  return (from % (d1 * 1000)) * 10 + d1;
};

const Rfunc = (from) => {
  let d4 = from % 10;
  return Math.floor(from / 10) + 1000 * d4;
};

const nextNums = (from) => {
  return [
    [Dfunc(from), "D"],
    [Sfunc(from), "S"],
    [Lfunc(from), "L"],
    [Rfunc(from), "R"],
  ];
};

const BFS = (from, to) => {
  const queue = [];
  const visited = new Array(10000).fill(0);

  queue.push([from, ""]);
  visited[from] = 1;
  while (queue.length) {
    let [curNum, curCommand] = queue.shift();
    if (curNum === to) return curCommand;
    for (let [nextNum, command] of nextNums(curNum)) {
      if (visited[nextNum]) continue;
      queue.push([nextNum, curCommand + command]);
      visited[nextNum] = 1;
    }
  }
};

const result = testCases.map(([from, to]) => BFS(from, to));
console.log(result.join("\n"));

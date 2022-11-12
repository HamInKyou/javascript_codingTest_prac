const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData.shift());
const graph = inputData.map((row) => row.split(" ").map(Number));
const result = Array.from(new Array(N), () => new Array(N).fill(0));

const DFS = (curNode, start, visited) => {
  for (let i = 0; i < N; i++) {
    if (graph[curNode][i] && !visited[i]) {
      visited[i] = 1;
      result[start][i] = 1;
      DFS(i, start, visited);
    }
  }
  return;
};

for (let i = 0; i < N; i++) {
  DFS(i, i, new Array(N).fill(0));
}

console.log(result.map((row) => row.join(" ")).join("\n"));

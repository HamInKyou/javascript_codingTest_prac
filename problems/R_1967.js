const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData.shift());
const edges = inputData.map((row) => row.split(" ").map(Number));

const graph = Array.from(new Array(N + 1), () => []);
for (let [from, to, dist] of edges) {
  graph[from].push([to, dist]);
  graph[to].push([from, dist]);
}

const visited = new Array(N + 1).fill(0);
const maxInfo = { v: 0, dist: 0 };

function DFS(v, dist) {
  visited[v] = 1;
  if (maxInfo.dist < dist) {
    maxInfo.v = v;
    maxInfo.dist = dist;
  }
  for (let [nextV, nextDist] of graph[v]) {
    if (visited[nextV]) continue;
    DFS(nextV, dist + nextDist);
  }
}
DFS(1, 0);
visited.fill(0);
DFS(maxInfo.v, 0);
console.log(maxInfo.dist);

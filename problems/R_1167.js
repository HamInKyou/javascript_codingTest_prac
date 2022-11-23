const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const V = Number(inputData.shift());

const graph = Array.from(new Array(V + 1), () => []);

for (let i = 0; i < V; i++) {
  let [targetNode, ...nodeInfo] = inputData[i].split(" ").map(Number);
  let cursor = 0;
  while (nodeInfo[cursor] > 0) {
    graph[targetNode].push([nodeInfo[cursor], nodeInfo[cursor + 1]]);
    cursor += 2;
  }
}

const visited = new Array(V + 1).fill(0);
const max = { vertex: 0, distance: Number.MIN_SAFE_INTEGER };

const DFS = function (vertex, totalDistance) {
  visited[vertex] = 1;
  if (max.distance < totalDistance) {
    max.vertex = vertex;
    max.distance = totalDistance;
  }
  for ([v, distance] of graph[vertex]) {
    if (visited[v]) continue;
    DFS(v, totalDistance + distance);
  }
};

DFS(1, 0);
max.distance = Number.MIN_SAFE_INTEGER;
visited.fill(0);
DFS(max.vertex, 0);

console.log(max.distance);

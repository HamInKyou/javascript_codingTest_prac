const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData.shift());
const M = Number(inputData.shift());
const edges = inputData.map((row) => row.split(" ").map(Number));

const graph = Array.from(new Array(N + 1), () =>
  new Array(N + 1).fill(Infinity)
);
for (let i = 1; i <= N; i++) {
  graph[i][i] = 0;
}

for (let [from, to, dist] of edges) {
  if (dist < graph[from][to]) graph[from][to] = dist;
}

for (let mid = 1; mid <= N; mid++) {
  for (let start = 1; start <= N; start++) {
    for (let end = 1; end <= N; end++) {
      graph[start][end] = Math.min(
        graph[start][mid] + graph[mid][end],
        graph[start][end]
      );
    }
  }
}

for (let i = 1; i <= N; i++) {
  let row = [];
  for (let j = 1; j <= N; j++) {
    row.push(graph[i][j] === Infinity ? 0 : graph[i][j]);
  }
  console.log(row.join(" "));
}

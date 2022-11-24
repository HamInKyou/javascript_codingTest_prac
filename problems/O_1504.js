const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, E] = inputData.shift().split(" ").map(Number);

const graph = Array.from(new Array(N + 1), () =>
  new Array(N + 1).fill(Infinity)
);
for (let i = 1; i <= N; i++) graph[i][i] = 0;
for (let i = 0; i < E; i++) {
  let [a, b, c] = inputData[i].split(" ").map(Number);
  graph[a][b] = c;
  graph[b][a] = c;
}

for (let mid = 1; mid <= N; mid++) {
  for (let start = 1; start <= N; start++) {
    for (let end = 1; end <= N; end++) {
      graph[start][end] = Math.min(
        graph[start][end],
        graph[start][mid] + graph[mid][end]
      );
    }
  }
}

const [u, v] = inputData[E].split(" ").map(Number);
const result = Math.min(
  graph[1][u] + graph[u][v] + graph[v][N],
  graph[1][v] + graph[v][u] + graph[u][N]
);
console.log(result === Infinity ? -1 : result);

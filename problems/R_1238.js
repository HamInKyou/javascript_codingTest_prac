const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, M, X] = inputData.shift().split(" ").map(Number);

const initGraph = (n) => {
  const initialGraph = Array.from(new Array(N + 1), () =>
    new Array(N + 1).fill(Infinity)
  );
  for (i = 1; i <= n; i++) {
    initialGraph[i][i] = 0;
  }
  return initialGraph;
};

const graph = initGraph(N);

for (let i = 0; i < M; i++) {
  let [from, to, dist] = inputData[i].split(" ").map(Number);
  graph[from][to] = dist;
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

const result = [];
for (let i = 1; i <= N; i++) {
  if (i === X) continue;
  result.push(graph[i][X] + graph[X][i]);
}
console.log(Math.max(...result));

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = inputData.shift().split(" ").map(Number);

const graph = Array.from(new Array(N + 1), () => []);
for (let i = 0; i < M; i++) {
  let [from, to] = inputData[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const visited = new Array(N + 1).fill(0);
const DFS = (v) => {
  visited[v] = 1;
  for (let i = 0; i < graph[v].length; i++) {
    if (visited[graph[v][i]]) continue;
    DFS(graph[v][i]);
  }
};

let cnt = 0;
for (let i = 1; i <= N; i++) {
  if (visited[i]) continue;
  DFS(i);
  cnt++;
}

console.log(cnt);

function dijkstra(N, graph, start, end) {
  const costArr = new Array(N + 1).fill(Infinity);
  const queue = [];

  queue.push([start, 0]);
  costArr[start] = 0;

  while (queue.length) {
    let [v, cost] = queue.pop();

    if (cost > costArr[v]) continue; //더 저렴한게 있을경우 패쓰
    //그 정점에서 갈 수 있는 다른 정점 조사
    for (let [nextV, nextCost] of graph[v]) {
      if (costArr[nextV] > costArr[v] + nextCost) {
        costArr[nextV] = costArr[v] + nextCost; //저장된 다음 정점까지의 거리 갱신
        queue.push([nextV, costArr[nextV]]);
      }
    }
  }
  return costArr[end];
}

const fs = require("fs");
const [N, M, ...inputData] = fs.readFileSync(0).toString().trim().split("\n");
const graph = Array.from(new Array(Number(N) + 1), () => []);

for (let i = 0; i < Number(M); i++) {
  let [from, to, cost] = inputData[i].split(" ").map(Number);
  graph[from].push([to, cost]);
}

// cost가 가장 작은 것부터 들어갈 수 있도록!
for (let i = 1; i <= Number(N); i++) {
  graph[i].sort((a, b) => a[1] - b[1]);
}
const [start, end] = inputData[Number(M)].split(" ").map(Number);
const result = dijkstra(Number(N), graph, start, end);
console.log(result);

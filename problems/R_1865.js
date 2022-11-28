function bellmanFord(V, graph) {
  //그냥 infinity쓰면 infinity에 음수 가중치 더해주어도 그대로 무한대이기 때문에!
  const customInfinity = 10001;
  const distArr = new Array(V + 1).fill(customInfinity);

  //모든 정점의 개수만큼 반복
  for (let i = 0; i < V; i++) {
    //모든 간선 뒤지기
    for (let v = 1; v <= V; v++) {
      for (let [nextV, nextDist] of graph[v]) {
        if (distArr[nextV] > distArr[v] + nextDist) {
          distArr[nextV] = distArr[v] + nextDist; //저장된 다음 정점까지의 거리 갱신
        }
      }
    }
  }
  //다시한번 모든 간선을 돌아보는데,
  for (let v = 1; v <= V; v++) {
    for (let [nextV, nextDist] of graph[v]) {
      //업데이트가 또 발생한다는건 음의 사이클이 존재한다는 것.
      if (distArr[nextV] > distArr[v] + nextDist) {
        return true;
      }
    }
  }
  return false;
}

function solution(N, bridges, wormholes) {
  const graph = Array.from(new Array(N + 1), () => []);
  for (let [S, E, T] of bridges) {
    graph[S].push([E, T]);
    graph[E].push([S, T]);
  }
  for (let [S, E, T] of wormholes) {
    graph[S].push([E, -T]);
  }
  return bellmanFord(N, graph) ? "YES" : "NO";
}

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const TC = Number(inputData.shift());
const result = [];

let cursor = 0;
for (let T = 0; T < TC; T++) {
  let [N, M, W] = inputData[cursor].split(" ").map(Number);
  let startPosition = ++cursor;
  const bridgeEdges = [];
  const wormholeEdges = [];

  while (cursor < startPosition + M) {
    bridgeEdges.push(inputData[cursor].split(" ").map(Number));
    cursor++;
  }
  while (cursor < startPosition + M + W) {
    wormholeEdges.push(inputData[cursor].split(" ").map(Number));
    cursor++;
  }
  result.push(solution(N, bridgeEdges, wormholeEdges));
}
console.log(result.join("\n"));

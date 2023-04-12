const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData.shift());
const edges = inputData.map((edge) => edge.split(" ").map(Number));
const graph = Array.from(new Array(N+1), () => new Array());
const parents = new Array(N+1).fill(0);
const visited = new Array(N+1).fill(false);

for(let [from, to] of edges) {
    graph[from].push(to);
    graph[to].push(from);
}

const queue = [1];
visited[1] = true;

while(queue.length) {
    const curNode = queue.shift();

    for (const nextNode of graph[curNode]) {
        if(visited[nextNode])
            continue;
        parents[nextNode] = curNode;
        visited[nextNode] = true;
        queue.push(nextNode);
    }
}

const result = parents.slice(2).join("\n");
console.log(result)

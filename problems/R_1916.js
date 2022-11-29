class Priority_Queue {
  constructor(compare) {
    this.heap = [null];
    this.compare = compare;
  }

  push(value) {
    this.heap.push(value);
    let cur = this.size();
    let parent = Math.floor(cur / 2);

    while (cur > 1 && this.compare(this.heap[parent], this.heap[cur])) {
      [this.heap[parent], this.heap[cur]] = [this.heap[cur], this.heap[parent]];
      cur = parent;
      parent = Math.floor(cur / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    if (this.size() === 1) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let cur = 1;
    let left = 2;
    let right = 3;

    while (
      this.compare(this.heap[cur], this.heap[left]) ||
      this.compare(this.heap[cur], this.heap[right])
    ) {
      if (this.compare(this.heap[left], this.heap[right])) {
        [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
        cur = right;
      } else {
        [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
        cur = left;
      }
      left = cur * 2;
      right = cur * 2 + 1;
    }
    return returnValue;
  }
  top() {
    return this.heap[1];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.heap.length - 1;
  }
}

function dijkstra(N, graph, start, end) {
  //시작 정점에서 각 정점까지 최소 비용를 저장하는 테이블
  const costArr = new Array(N + 1).fill(Infinity);
  //방문 했는지 저장하는 테이블
  const visited = new Array(N + 1).fill(0);
  //최소 비용 코스트에 해당하는 정점부터 나오는 우선순위 큐
  const minHeap = new Priority_Queue((a, b) => {
    return a?.cost > b?.cost;
  });

  //최소힙에 시작정점 넣고, cost 0으로 설정해주기
  minHeap.push({ v: start, cost: 0 });
  costArr[start] = 0;

  while (minHeap.size()) {
    let { v } = minHeap.pop(); //제일 비용 싼거 뽑아내기
    visited[v] = 1;

    //그 정점에서 갈 수 있는 다른 정점 조사
    for (let [nextV, nextCost] of graph[v]) {
      if (visited[nextV]) continue; //다음 정점이 이미 방문한 정점이라면 패쓰
      //현재 저장된 다음 정점까지의 비용보다, 뽑아낸 정점을 통해 그 정점으로 가는게 더 저렴할 경우
      if (costArr[nextV] > costArr[v] + nextCost) {
        costArr[nextV] = costArr[v] + nextCost; //저장된 다음 정점까지의 거리 갱신
        minHeap.push({ v: nextV, cost: costArr[nextV] }); //최소힙에 푸시하기.
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

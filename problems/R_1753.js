const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [V, E] = inputData.shift().split(" ").map(Number);
const K = Number(inputData.shift());

//그래프 생성
const graph = Array.from(new Array(V + 1), () => []);
for (let i = 0; i < E; i++) {
  let [from, to, dist] = inputData[i].split(" ").map(Number);
  graph[from].push([to, dist]);
}

//우선순위 큐 클래스
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

//다익스트라 시작~
//시작 정점에서 각 정점까지 최단 거리를 저장하는 테이블
const distArr = new Array(V + 1).fill(Infinity);
//방문 했는지 저장하는 테이블
const visited = new Array(V + 1).fill(0);
//최단 거리가 가장 짧은 것부터 나오는 우선순위 큐
const minHeap = new Priority_Queue((a, b) => {
  return a?.dist > b?.dist;
});

//최소힙에 시작정점 넣고, 거리 0으로 설정해주기
minHeap.push({ v: K, dist: 0 });
distArr[K] = 0;

while (minHeap.size()) {
  let { v } = minHeap.pop(); //제일 거리 짧은거 뽑아내기
  visited[v] = 1;

  //그 정점에서 갈 수 있는 다른 정점 조사
  for (let [nextV, nextDist] of graph[v]) {
    if (visited[nextV]) continue; //다음 정점이 이미 방문한 정점이라면 패쓰
    //현재 저장된 다음 정점까지의 거리보다, 뽑아낸 정점을 통해 그 정점으로 가는게 더 짧을 경우
    if (distArr[nextV] > distArr[v] + nextDist) {
      distArr[nextV] = distArr[v] + nextDist; //저장된 다음 정점까지의 거리 갱신
      minHeap.push({ v: nextV, dist: distArr[nextV] }); //최소힙에 푸시하기.
    }
  }
}

const [_, ...result] = distArr;
console.log(
  result
    .map((dist) => {
      return dist === Infinity ? "INF" : dist;
    })
    .join("\n")
);

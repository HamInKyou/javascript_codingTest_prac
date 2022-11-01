# 힙 (heap)

우선순위 큐를 구현하는데 밑받침이 되는 자료구조
트리 구조이기 대문에 삽입과 삭제에 O(logN)의 시간 소요

힙의 종류는 두가지가 있다.

1. 최대 힙
2. 최소 힙

힙을 통해서 빠른시간 안에 최대값 또는 최소값을 찾아낼 수 있다.

삽입할 땐 맨 뒤에 삽입하여 힙을 재정렬해주고,
삭제할 땐 맨 위에걸 제거하고 힙을 재정렬해준다.

## 최대 힙

큰값이 항상 위쪽에 있어야하며,
따라서 삭제할 때 최대값을 계속 삭제해나가는 힙

```javascript
//최대 힙
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1; //푸시한거부터 시작
    let parent = Math.floor(cur / 2); //푸시한거의 부모인덱스

    while (cur > 1 && this.heap[parent] < this.heap[cur]) {
      //현재 루트가 아니고, 부모노드가 현재 노드보다 작을경우
      //부모노드가 커야하기 때문에 현재 노드를 부모랑 swap해서 올려보내준다.
      [this.heap[parent], this.heap[cur]] = [this.heap[cur], this.heap[parent]];
      cur = parent;
      parent = Math.floor(cur / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1]; //노드에 있는 값을 빼겠다.
    if (this.size() === 1) this.heap = [null];
    else this.heap[1] = this.heap.pop(); //빈자리가 된 노드에 제일 끝 자식을 빼와서 채운다.

    let cur = 1;
    let left = 2;
    let right = 3;

    //자식이 더이상 크지 않을 때까지 반복
    while (
      this.heap[cur] < this.heap[left] ||
      this.heap[cur] < this.heap[right]
    ) {
      //왼쪽과 오른쪽 중에 더 큰거랑 변경 (제일 위로 제일 큰거 올려보내기 위해)
      if (this.heap[left] < this.heap[right]) {
        [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
        cur = right;
      } else {
        [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
        cur = left;
      }
      left = current * 2;
      right = current * 2 + 1;
    }
    return returnValue;
  }
  size() {
    return this.heap.length - 1;
  }
}
```

## 최소 힙

작은값이 항상 위쪽에 있어야하며,
따라서 삭제할 때 작은값을 계속 삭제해나가는 힙

```javascript
//최소 힙
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1; //푸시한거부터 시작
    let parent = Math.floor(cur / 2); //푸시한거의 부모인덱스

    while (cur > 1 && this.heap[parent] > this.heap[cur]) {
      //현재 루트가 아니고, 부모노드가 현재 노드보다 클경우
      //부모노드가 작아야하기 때문에 현재 노드를 부모랑 swap해서 올려보내준다.
      [this.heap[parent], this.heap[cur]] = [this.heap[cur], this.heap[parent]];
      cur = parent;
      parent = Math.floor(cur / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1]; //노드에 있는 값을 빼겠다.
    if (this.size() === 1) this.heap = [null];
    else this.heap[1] = this.heap.pop(); //빈자리가 된 노드에 제일 끝 자식을 빼와서 채운다.

    let cur = 1;
    let left = 2;
    let right = 3;

    //자식이 더이상 작지 않을 때까지 반복
    while (
      this.heap[cur] > this.heap[left] ||
      this.heap[cur] > this.heap[right]
    ) {
      //왼쪽과 오른쪽 중에 더 작은거랑 변경 (제일 위로 제일 작은거 올려보내기 위해)
      if (this.heap[left] > this.heap[right]) {
        [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
        cur = right;
      } else {
        [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
        cur = left;
      }
      left = current * 2;
      right = current * 2 + 1;
    }
    return returnValue;
  }
  size() {
    return this.heap.length - 1;
  }
}
```

# 스택 (LIFO)

나중에 들어온게 제일 먼저 나가는 자료구조

## Array로 구현

```javascript
const stack = [];

stack.push(el); //push

stack.pop(); //pop

stack[stack.length - 1]; // top
```

## LinkedList로 구현

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//링크드 리스트로 구현한 스택은 head가 top, tail이 bottom
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(newValue) {
    const node = new Node(newValue);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}
```

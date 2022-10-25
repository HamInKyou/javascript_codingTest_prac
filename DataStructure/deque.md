# 덱 (deque)

앞으로도 뒤로도 넣을 수 있고, 앞으로도 뒤로도 뺄 수 있는 자료구조

## Array로 구현

```javascript
class Deque {
  constructor() {
    this.deque = [];
    this.front = 0;
    this.rear = 0;
  }

  pushFront(value) {
    this.deque.splice(this.front, 0, value);
    this.rear++;
  }
  pushRear(value) {
    this.deque[this.rear++] = value;
  }

  popFront() {
    const value = this.deque[this.front];
    delete this.deque[this.front];
    this.front += 1;
    return value;
  }

  popRear() {
    const value = this.deque[--this.rear];
    delete this.deque[this.rear];
    return value;
  }
  size() {
    return this.rear - this.front;
  }
}
```

## linked List로 구현

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
  }
  pushRear(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  popFront() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  popRear() {
    let currentNode = this.head;
    const value = this.tail.value;
    if (this.size > 1) {
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.size -= 1;

    return value;
  }
}
```

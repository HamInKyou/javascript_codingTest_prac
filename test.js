class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /**
   * 찾고자하는 값과 일치하는 노드를 리턴
   * @param value 찾고자하는 값
   * @returns 찾고자하는 노드
   * */
  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }

  /**
   * 맨 뒤에 노드 추가
   * @param newValue 추가하고 싶은 값
   */
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * 해당 노드 뒤에 새로운 노드 삽입
   * @param node 삽입하고 싶은 위치에 있는 노드
   * @param newValue 삽입하고 싶은 값
   */
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  /**
   * 입력한 값과 같은 값을 갖고 있는 노드를 제거
   * @param value 삭제하고 싶은 값
   */
  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  /**
   * @returns 링크드 리스트 문자열화
   */
  toString() {
    var str = "";
    var currNode = this.head;
    while (currNode.next != null) {
      str += currNode.next.value + " ";
      currNode = currNode.next;
    }
    return str;
  }

  /**
   * @returns 링크드 리스트 배열화
   */
  toArray() {
    const arr = [];
    var currNode = this.head;
    while (currNode.next != null) {
      arr.push(currNode.next.value);
      currNode = currNode.next;
    }
    return arr;
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
console.log(linkedList.toString());
console.log(linkedList.toArray());
linkedList.remove(3);
console.log(linkedList.toString());
linkedList.insert(linkedList.find(2), 10);
console.log(linkedList.toString());

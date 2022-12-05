const fs = require("fs");
const preOrder = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const treeSize = preOrder.length;

const result = [];
function preOrder2PostOrder(start, end) {
  if (start >= end) return;
  let root = preOrder[start]; //현재 루트
  let div = end; //오른쪽 자식에 해당되는 시작점

  //끊음점 찾기
  for (let cursor = start + 1; cursor < end; cursor++) {
    if (root < preOrder[cursor]) {
      div = cursor;
      break;
    }
  }
  preOrder2PostOrder(start + 1, div);
  preOrder2PostOrder(div, end);
  result.push(root);
}

preOrder2PostOrder(0, treeSize);
console.log(result.join("\n"));

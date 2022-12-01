const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData.shift());
const nodes = inputData.map((strRow) => strRow.split(" "));

const tree = new Array(N ** 2).fill(null);
tree[0] = null;
tree[1] = "A";

for (let [parent, left, right] of nodes) {
  let parentIdx = tree.findIndex((node) => node === parent);
  tree[parentIdx * 2] = left === "." ? null : left;
  tree[parentIdx * 2 + 1] = right === "." ? null : right;
}

const result = [];
let frontRecursionResult = "";
function frontRecursion(cursor) {
  if (!tree[cursor]) return;

  frontRecursionResult += tree[cursor];
  frontRecursion(cursor * 2);
  frontRecursion(cursor * 2 + 1);
}
frontRecursion(1);
result.push(frontRecursionResult);

let middleRecursionResult = "";
function middleRecursion(cursor) {
  if (!tree[cursor]) return;

  middleRecursion(cursor * 2);
  middleRecursionResult += tree[cursor];
  middleRecursion(cursor * 2 + 1);
}
middleRecursion(1);
result.push(middleRecursionResult);

let backRecursionResult = "";
function backRecursion(cursor) {
  if (!tree[cursor]) return;

  backRecursion(cursor * 2);
  backRecursion(cursor * 2 + 1);
  backRecursionResult += tree[cursor];
}
backRecursion(1);
result.push(backRecursionResult);

console.log(result.join("\n"));

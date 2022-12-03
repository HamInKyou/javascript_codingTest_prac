const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData[0]);
const inorder = inputData[1].split(" ").map(Number);
const postorder = inputData[2].split(" ").map(Number);

const result = [];

function find_preorder(inStart, inEnd, postStart, postEnd) {
  if (inStart > inEnd || postStart > postEnd) {
    return;
  }

  let root = postorder[postEnd];
  result.push(root);

  let rootIdxInorder;
  let leftChildAmount = 0;
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === root) {
      rootIdxInorder = i;
      break;
    }
    leftChildAmount++;
  }

  let postEnd_left = postStart + leftChildAmount - 1;
  find_preorder(inStart, rootIdxInorder - 1, postStart, postEnd_left);
  find_preorder(rootIdxInorder + 1, inEnd, postEnd_left + 1, postEnd - 1);
}
find_preorder(0, N - 1, 0, N - 1);
console.log(result.join(" "));

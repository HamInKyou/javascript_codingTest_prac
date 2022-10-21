const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [_, m] = inputData[0].split(" ").map(Number);
const trees = inputData[1].split(" ").map(Number);

let left = 0;
let right = Math.max(...trees);
let result = 0;
while (true) {
  if (left > right) {
    break;
  }
  let mid = Math.floor((left + right) / 2);
  let totalTree = trees.reduce(
    (acc, cur) => acc + (cur - mid > 0 ? cur - mid : 0),
    0
  );

  if (totalTree >= m) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
console.log(result);

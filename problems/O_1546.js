const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const n = inputData[0];
const points = inputData[1].split(" ").map(Number);

const m = Math.max(...points);
const totalPoint = points
  .map((point) => (point / m) * 100)
  .reduce((acc, cur) => acc + cur, 0);
const result = totalPoint / n;
console.log(result);

const fs = require("fs");
const n = Number(fs.readFileSync(0));

const arr = new Array(n + 1).fill(0);
arr[2] = 1;
arr[3] = 1;

for (let i = 4; i <= n + 1; i++) {
  let counts = [];
  if (i % 3 === 0) {
    counts.push(arr[i / 3] + 1);
  }
  if (i % 2 === 0) {
    counts.push(arr[i / 2] + 1);
  }
  counts.push(arr[i - 1] + 1);
  arr[i] = Math.min(...counts);
}
console.log(arr[n]);

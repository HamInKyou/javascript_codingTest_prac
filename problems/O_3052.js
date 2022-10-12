const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const arr42 = new Array(42).fill(0);

for (let i = 0; i < 10; i++) {
  arr42[inputData[i] % 42] += 1;
}

console.log(arr42.filter((el) => el > 0).length);

//집합으로 풀이
const fs = require("fs");
const inputData = new Set(
  fs.readFileSync(0).toString().trim().split("\n").map(Number)
);

for (let i = 1; i <= 30; i++) {
  if (!inputData.has(i)) console.log(i);
}

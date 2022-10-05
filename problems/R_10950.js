const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split("\n");
const [n, ...testCases] = inputData;

for (let i = 0; i < n; i++) {
  const [a, b] = testCases[i].split(" ").map(Number);
  console.log(a + b);
}

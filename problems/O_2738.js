const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = inputData[0].split(" ").map(Number);

for (let i = 1; i <= n; i++) {
  let aMatRow = inputData[i].split(" ").map(Number);
  let bMatRow = inputData[n + i].split(" ").map(Number);
  let rowResult = [];
  for (let j = 0; j < m; j++) {
    rowResult.push(aMatRow[j] + bMatRow[j]);
  }
  console.log(rowResult.join(" "));
}

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [t, ...testCases] = inputData;

for (let i = 0; i < t; i++) {
  console.log(testCases[i][0] + testCases[i][testCases[i].length - 1]);
}

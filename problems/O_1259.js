const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < inputData.length - 1; i++) {
  let reversedData = [...inputData[i]].reverse().join("");
  if (inputData[i] === reversedData) {
    console.log("yes");
    continue;
  }
  console.log("no");
}

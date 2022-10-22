const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < inputData.length - 1; i++) {
  let [a, b, c] = inputData[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (a ** 2 + b ** 2 === c ** 2) {
    console.log("right");
    continue;
  }
  console.log("wrong");
}

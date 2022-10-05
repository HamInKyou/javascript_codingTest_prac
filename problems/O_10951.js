const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < inputData.length; i++) {
  const [a, b] = inputData[i].split(" ").map(Number);
  console.log(a + b);
}

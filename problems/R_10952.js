const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n"); //trim을 앞으로 써주자..

for (let i = 0; i < inputData.length - 1; i++) {
  const [a, b] = inputData[i].split(" ").map(Number);
  console.log(a + b);
}

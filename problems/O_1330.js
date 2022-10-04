const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");
const [a, b] = inputData.map((item) => parseInt(item));

if (a > b) {
  console.log(">");
} else if (a === b) {
  console.log("==");
} else {
  console.debug("<");
}

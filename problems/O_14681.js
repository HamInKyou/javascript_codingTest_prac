const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split("\n");
const [x, y] = inputData.map(Number);

if (x > 0) {
  console.log(y > 0 ? "1" : "4");
} else {
  console.log(y > 0 ? "2" : "3");
}

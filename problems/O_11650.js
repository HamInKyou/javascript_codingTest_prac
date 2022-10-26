const fs = require("fs");
const [_, ...inputData] = fs.readFileSync(0).toString().trim().split("\n");

const points = inputData.map((point) => point.split(" ").map(Number));
points.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
console.log(points.map((point) => point.join(" ")).join("\n"));

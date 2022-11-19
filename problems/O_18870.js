const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData[0]);
const points = inputData[1].split(" ").map(Number);

const sortedPoints = [...new Set(points)].sort((a, b) => a - b);

const pointsObj = {};
for (let i = 0; i < N; i++) {
  pointsObj[sortedPoints[i]] = i;
}

const result = points.map((point) => pointsObj[point]);
console.log(result.join(" "));

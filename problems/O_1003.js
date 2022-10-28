const fs = require("fs");
const [_, ...inputData] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const maxNum = Math.max(...inputData);
const counterArr = [
  [1, 0],
  [0, 1],
];
for (let i = 2; i <= maxNum; i++) {
  counterArr.push([
    counterArr[i - 2][0] + counterArr[i - 1][0],
    counterArr[i - 2][1] + counterArr[i - 1][1],
  ]);
}
const result = inputData.map((number) => counterArr[number]);

console.log(result.map((counter) => counter.join(" ")).join("\n"));

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData[0]);
const times = inputData[1].split(" ").map(Number);

const result = times
  .sort((a, b) => a - b)
  .reduce(
    ([wait, allTime], cur) => {
      return [wait + cur, allTime + wait + cur];
    },
    [0, 0]
  );
console.log(result[1]);

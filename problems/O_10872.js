const fs = require("fs");
const inputData = fs.readFileSync(0);
const n = Number(inputData);

const result =
  n > 0
    ? Array.from(new Array(n), (_, k) => k + 1).reduce(
        (acc, cur) => acc * cur,
        1
      )
    : 1;
console.log(result);

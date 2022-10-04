const fs = require("fs");
const inputData = fs.readFileSync(0);
const n = Number(inputData);

const answer = Array.from(new Array(n), (_, k) => k + 1).reduce(
  (acc, cur) => (acc += cur + "\n"),
  ""
);

console.log(answer);

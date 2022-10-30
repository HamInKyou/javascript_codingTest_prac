const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [n, _] = inputData.shift().split(" ").map(Number);
const poketmons = [""].concat(inputData.slice(0, n));
const poketmonsObj = poketmons.reduce((acc, cur, idx) => {
  acc[cur] = idx;
  return acc;
}, {});
const questions = inputData.slice(n);

const results = questions.map((question) => {
  if (Number.isNaN(Number(question))) {
    return poketmonsObj[question];
  } else {
    return poketmons[Number(question)];
  }
});
console.log(results.join("\n"));

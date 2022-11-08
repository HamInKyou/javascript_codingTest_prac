const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const T = Number(inputData.shift());

const solveTestCase = (n, wears) => {
  const wearsMap = {};
  for (let i = 0; i < n; i++) {
    let [_, category] = wears[i];
    wearsMap[category] = (wearsMap[category] ?? 0) + 1;
  }
  let totalCombinationCnt = [...Object.values(wearsMap)].reduce(
    (acc, v) => acc * (v + 1),
    1
  ); //경우의 수 (입는경우 + 안입는경우(1)) * (입는경우 + 안입는경우(1)) * ...
  return totalCombinationCnt - 1; //모두 안입은 경우 빼야하니까
};

const result = [];
let cursor = 0;
for (let i = 0; i < T; i++) {
  let n = Number(inputData[cursor]);
  let wears = inputData
    .slice(cursor + 1, cursor + n + 1)
    .map((item) => item.split(" "));
  result.push(solveTestCase(n, wears));
  cursor += n + 1;
}
console.log(result.join("\n"));

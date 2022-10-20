const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [_, m] = inputData[0].split(" ").map(Number);
const cards = inputData[1].split(" ").map(Number);

const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    let rest = origin.slice(index + 1);
    let combinations = getCombinations(rest, selectNumber - 1);
    let attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const combinations = getCombinations(cards, 3);
const sumsUnderM = combinations
  .map((combination) => combination.reduce((acc, cur) => acc + cur))
  .filter((value) => value <= m);
const result = Math.max(...sumsUnderM);
console.log(result);

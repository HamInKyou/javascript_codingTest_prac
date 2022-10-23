const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(inputData[0]);
const allCards = inputData[1].split(" ");
const myCards = inputData[3].split(" ");

const cardObj = {};
for (let i = 0; i < n; i++) {
  if (cardObj[allCards[i]]) {
    cardObj[allCards[i]] += 1;
  } else {
    cardObj[allCards[i]] = 1;
  }
}

const result = myCards
  .map((card) => (cardObj[card] ? cardObj[card] : 0))
  .join(" ");
console.log(result);

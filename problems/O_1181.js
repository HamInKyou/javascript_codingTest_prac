const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [_, ...words] = inputData;

words.sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return a > b ? 1 : -1;
});
const sortedWordSet = [...new Set(words)];
console.log(sortedWordSet.join("\n"));

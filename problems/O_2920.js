const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");

const sortedData = [...inputData].sort();
const reverseSortedData = [...sortedData].reverse();

if (inputData.join("") === sortedData.join("")) {
  console.log("ascending");
} else if (inputData.join("") === reverseSortedData.join("")) {
  console.log("descending");
} else {
  console.log("mixed");
}

/*
또 다른 풀이 방법
const result = {
  '1 2 3 4 5 6 7 8': 'ascending',
  '8 7 6 5 4 3 2 1': 'descending'
}[input];

console.log(result || 'mixed');
*/

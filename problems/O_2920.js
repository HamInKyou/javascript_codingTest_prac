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

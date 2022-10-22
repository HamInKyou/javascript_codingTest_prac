const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(inputData.shift());
const people = inputData.map((man) => man.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  let result = 1;
  for (let j = 0; j < n; j++) {
    if (people[j][0] > people[i][0] && people[j][1] > people[i][1]) {
      result++;
    }
  }
  console.log(result);
}

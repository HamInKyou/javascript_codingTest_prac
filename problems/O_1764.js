const fs = require("fs");
const [_, ...inputData] = fs.readFileSync(0).toString().split("\n");

const people = {};
for (person of inputData) {
  if (people[person]) {
    people[person]++;
  } else {
    people[person] = 1;
  }
}

const result = Object.keys(people)
  .filter((person) => people[person] > 1)
  .sort();
console.log(result.length);
console.log(result.join("\n"));

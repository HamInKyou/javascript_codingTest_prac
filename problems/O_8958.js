const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [t, ...testcases] = inputData;

for (let i = 0; i < Number(t); i++) {
  let testcase = testcases[i];
  let totalScore = 0;
  let score = 1;
  for (let j = 0; j < testcase.length; j++) {
    if (testcase[j] === "X") {
      score = 1;
      continue;
    }
    totalScore += score;
    score += 1;
  }
  console.log(totalScore);
}

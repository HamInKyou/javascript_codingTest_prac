const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [t, ...testCases] = inputData;

for (let i = 0; i < Number(t); i++) {
  let [r, s] = testCases[i].split(" ");
  let result = "";
  for (let j = 0; j < s.length; j++) {
    for (let k = 0; k < Number(r); k++) {
      result += s[j];
    }
  }
  console.log(result);
}

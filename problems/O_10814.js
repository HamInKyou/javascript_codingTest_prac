const fs = require("fs");
const [n, ...inputData] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((data) => data.trim().split(" "));

inputData.sort((a, b) => {
  if (Number(a[0]) === Number(b[0])) {
    return a[1] - b[1];
  }
  return Number(a[0]) - Number(b[0]);
});

for (let i = 0; i < n; i++) {
  console.log(inputData[i][0], inputData[i][1]);
}

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(inputData.shift());
const timeTable = inputData
  .map((row) => row.split(" ").map(Number))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let curStartTime = 0;
let lastEndTime = 0;
let meetingCount = 0;
for (let i = 0; i < n; i++) {
  curStartTime = timeTable[i][0];
  if (curStartTime >= lastEndTime) {
    meetingCount++;
    lastEndTime = timeTable[i][1];
  }
}
console.log(meetingCount);

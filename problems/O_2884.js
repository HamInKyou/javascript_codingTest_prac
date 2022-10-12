const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let [hour, min] = inputData;

if (min < 45) {
  hour = hour === 0 ? hour + 24 : hour;
  hour -= 1;
  min += 60;
}
min -= 45;
console.log(hour, min);

const fs = require("fs");
const inputData = fs.readFileSync(0);
const year = Number(inputData);
let is_yun = false;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  is_yun = true;
}
console.log(is_yun ? 1 : 0);

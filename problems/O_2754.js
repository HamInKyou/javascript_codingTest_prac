const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim();

let result = 0;
switch (inputData[0]) {
  case "A":
    result += 4;
    break;
  case "B":
    result += 3;
    break;
  case "C":
    result += 2;
    break;
  case "D":
    result += 1;
    break;
  case "F":
    result += 0.0;
    break;
}

switch (inputData[1]) {
  case "+":
    result += 0.3;
    break;
  case "0":
    result += 0;
    break;
  case "-":
    result -= 0.3;
    break;
}

console.log(result.toFixed(1));

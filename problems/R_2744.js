const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim();

const result = Array.from(inputData).map((char) => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  }
  return char.toUpperCase();
});

console.log(result.join(""));

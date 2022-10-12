const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().toUpperCase();

const alphabets = {};
for (let i = 0; i < inputData.length; i++) {
  if (alphabets[inputData[i]]) {
    alphabets[inputData[i]] += 1;
  } else {
    alphabets[inputData[i]] = 1;
  }
}
const maxCharAmount = Math.max(...Object.values(alphabets));
const result = Object.keys(alphabets).filter(
  (char) => alphabets[char] === maxCharAmount
);

if (result.length > 1) {
  console.log("?");
} else {
  console.log(result[0]);
}

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim();

const ASKI_A = "a".charCodeAt(0);
const result = Array.from(new Array(26), (_, k) =>
  String.fromCharCode(ASKI_A + k)
).map((char) => {
  return inputData.indexOf(char);
});
console.log(result.join(" "));

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const fieldData = new Set(inputData[1].split(" ").map(Number).sort());
const targetData = inputData[3].split(" ").map(Number);

const result = targetData.map((number) => (fieldData.has(number) ? 1 : 0));

console.log(result.join("\n"));

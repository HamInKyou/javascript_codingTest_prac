const fs = require("fs");
const [_, ...inputData] = fs.readFileSync(0).toString().trim().split("\n");

console.log(inputData.sort((a, b) => a - b).join("\n"));

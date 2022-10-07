const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim();
const result = inputData ? inputData.split(" ").length : 0;

console.log(result);

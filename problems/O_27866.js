const fs = require('fs');
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const s = inputData[0];
const i = Number(inputData[1]);

console.log(s[i-1])

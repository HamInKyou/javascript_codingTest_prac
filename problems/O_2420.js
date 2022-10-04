const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split(" ");
const [n, m] = inputData.map(Number);

console.log(Math.abs(n - m));

const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");
const [a, b] = inputData.map((item) => parseInt(item));
console.debug(a - b);

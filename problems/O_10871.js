const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [n, x] = inputData[0].split(" ").map(Number);
const arr = inputData[1].split(" ").map(Number);

const resultArr = arr.filter((item) => item < x);
console.log(resultArr.join(" "));

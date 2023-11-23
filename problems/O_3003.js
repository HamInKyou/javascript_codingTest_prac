const fs = require("fs")
const inputData = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const PIECES = [1,1,2,2,2,8];

const result = inputData.map((v, i) => PIECES[i]-v);
console.log(result.join(" "))
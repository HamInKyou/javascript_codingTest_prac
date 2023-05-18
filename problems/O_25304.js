const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const X = Number(inputData.shift());
const N = Number(inputData.shift());

const items = inputData.map((str) => str.split(" ").map(Number));
let price = items.reduce((acc, [price, item]) => acc + price*item, 0)

console.log(price===X ? "Yes" : "No")
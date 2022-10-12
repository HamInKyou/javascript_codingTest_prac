const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");
const reversedData = inputData.map((data) =>
  Number(Array.from(data).reverse().join(""))
);
console.log(Math.max(...reversedData));

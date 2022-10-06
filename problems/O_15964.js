const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = inputData.map(Number);

const specialFunc = (n1, n2) => {
  return (n1 + n2) * (n1 - n2);
};

console.log(specialFunc(a, b));

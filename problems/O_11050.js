const fs = require("fs");
const [n, k] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const factorial = (number) => {
  if (number <= 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

const result = factorial(n) / (factorial(k) * factorial(n - k));
console.log(result);

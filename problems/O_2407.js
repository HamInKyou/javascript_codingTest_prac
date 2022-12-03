const fs = require("fs");
const [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function factorial(n) {
  if (n === 1) return BigInt(1);
  return BigInt(n) * factorial(n - 1);
}

const result = factorial(N) / (factorial(M) * factorial(N - M));
console.log(Number(result));

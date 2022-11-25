const fs = require("fs");
const [A, B, C] = fs.readFileSync(0).toString().trim().split(" ").map(BigInt);

const pow = function (a, b, c) {
  if (b === BigInt(0)) return BigInt(1);
  let temp = pow(a, BigInt(b / BigInt(2)), c);
  if (b % BigInt(2)) {
    //홀수승
    return (((temp * temp) % c) * a) % c;
  } else {
    //짝수승
    return (temp * temp) % c;
  }
};

console.log(Number(pow(A, B, C)));

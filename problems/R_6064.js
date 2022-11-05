const fs = require("fs");
const inputData =                                                                                                                                                   fs.readFileSync(0).toString().trim().split("\n");
const T = Number(inputData.shift());

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  let r = a % b;
  return getGCD(b, r);
};
const getLCM = (a, b, gcd) => {
  return (a * b) / gcd;
};

const result = [];
for (let i = 0; i < T; i++) {
  let [M, N, x, y] = inputData[i].split(" ").map(Number);
  let gcd = getGCD(M, N);
  let lcm = getLCM(M, N, gcd);
  let [year, curY] = [0, 0];
  while (true) {
    if (year > lcm) {
      result.push(-1);
      break;
    }
    if (curY === y) {
      result.push(year);
      break;
    }
    year += year > 0 ? M : x;
    curY = year % N > 0 ? year % N : N;
  }
}
console.log(result.join("\n"));

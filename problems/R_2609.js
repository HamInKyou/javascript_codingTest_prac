const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

/*
유클리드 호제법
최대공약수(GCD)
a를 b로 나눈 나머지를 r이라고 했을 때, a,b의 최대공약수는 b와 r의 최대공약수와 같다. r이 0이면 그때의 b가 최대공약수
*/
const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  let r = a % b;
  return getGCD(b, r);
};
const gcd = getGCD(a, b);

/*
최소공배수(LCM)
a * b = 최대공약수 * 최소공배수
-> a*b/최대공약수 = 최소공배수
*/
const getLCM = (a, b, gcd) => {
  return (a * b) / gcd;
};
const lcm = getLCM(a, b, gcd);

console.log(gcd);
console.log(lcm);

const fs = require("fs");
const n = 100 || Number(fs.readFileSync(0));

const factorial = (n) => {
  if (n <= 1) {
    return BigInt(1);
  }
  return BigInt(n) * factorial(n - 1);
};

const result = factorial(n)
  .toString()
  .split("")
  .reverse()
  .findIndex((number) => Number(number) > 0);
console.log(result);

/*또다른 풀이
const getFiveCount = (x) => {
  let result = 0;
  for(let i = 5; i <= x; i*=5){
    result += parseInt(x/i)
  } 
  return result;
}
console.log(result);
*/

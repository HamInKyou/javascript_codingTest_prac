const fs = require("fs");
const [_, inputData] = fs.readFileSync(0).toString().split("\n");

const STARTCODE = "a".charCodeAt();
const M = 1234567891;
let r = 1;
const result = [...inputData].reduce((acc, cur) => {
  acc += (cur.charCodeAt() - STARTCODE + 1) * r;
  r *= 31;
  r %= M;
  return (acc %= M);
}, 0);
console.log(result % M);

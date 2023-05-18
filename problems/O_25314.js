const fs = require("fs");
const N = Number(fs.readFileSync(0));

const longCnt = N/4;
let result = Array.from(new Array(longCnt), ()=> 'long');

console.log(result.join(" ")+" int")
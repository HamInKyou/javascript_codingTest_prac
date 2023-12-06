const fs = require("fs");

const N = Number(fs.readFileSync(0));

const size = 1 + Math.pow(2, N);
console.log(Math.pow(size, 2));

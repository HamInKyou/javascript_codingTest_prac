const fs = require("fs");

const [N, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const result = N.toString(B).toUpperCase();

console.log(result);

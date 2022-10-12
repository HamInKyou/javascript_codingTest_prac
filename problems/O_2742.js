const fs = require("fs");
const n = Number(fs.readFileSync(0));

const result = Array.from(new Array(n), (_, k) => n - k).join("\n");
console.log(result);

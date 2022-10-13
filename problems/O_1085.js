const fs = require("fs");
const [x, y, w, h] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.min(x, y, w - x, h - y));

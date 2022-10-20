const fs = require("fs");
const n = Number(fs.readFileSync(0));

let count = 0;
let curLevelStart = 1;
let level = 1;
for (let i = 1; i <= n; i++) {
  if (count === curLevelStart + (level - 1) * 6) {
    level++;
    curLevelStart = count;
  }
  count++;
}
console.log(level);

const fs = require("fs");
const n = Number(fs.readFileSync(0));

let star = "";
for (let i = 0; i < n; i++) {
  star += "*";
  console.log(star);
}

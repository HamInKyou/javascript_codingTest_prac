const fs = require("fs");
const n = Number(fs.readFileSync(0).toString());

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = n - i; j > 0; j--) {
    row += " ";
  }
  for (let k = 0; k < i; k++) {
    row += "*";
  }
  console.log(row);
}

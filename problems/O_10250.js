const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const t = Number(inputData.shift());

for (let i = 0; i < t; i++) {
  let [h, _, n] = inputData[i].split(" ").map(Number);

  let yy = n % h > 0 ? n % h : h;
  let xx = Math.ceil(n / h);
  console.log(`${yy}${xx >= 10 ? xx : `0${xx}`}`);
}

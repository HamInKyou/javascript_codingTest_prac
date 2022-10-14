const fs = require("fs");
const [m, n] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const field = Array.from(new Array(n + 1), (_, k) => k);
field[0] = -1;
field[1] = -1;

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (field[i]) {
    let j = 2;
    while (j * i <= n) {
      field[j * i] = -1;
      j++;
    }
  }
}

const result = field.filter((v) => v >= m);
console.log(result.join("\n"));

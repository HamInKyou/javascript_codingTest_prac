const fs = require("fs");
const n = Number(fs.readFileSync(0));

let result = -1;
for (let constructor = 0; constructor < n; constructor++) {
  let decompositionSum =
    Array.from(constructor.toString())
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0) + constructor;
  if (decompositionSum === n) {
    result = constructor;
    break;
  }
}

if (result > 0) {
  console.log(result);
} else {
  console.log(0);
}

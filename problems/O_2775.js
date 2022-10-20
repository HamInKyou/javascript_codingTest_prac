const fs = require("fs");
const [t, ...inputData] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const result = [];
for (let i = 0; i < t; i++) {
  let k = inputData[i * 2];
  let n = inputData[i * 2 + 1];
  let apartment = Array.from(new Array(k + 1), () => new Array(n).fill(0));
  apartment[0] = apartment[0].map((_, index) => index + 1);
  for (let k_i = 1; k_i <= k; k_i++) {
    apartment[k_i][0] = 1;
    for (let n_i = 1; n_i < n; n_i++) {
      apartment[k_i][n_i] = apartment[k_i][n_i - 1] + apartment[k_i - 1][n_i];
    }
  }
  result.push(apartment[k][n - 1]);
}
console.log(result.join("\n"));

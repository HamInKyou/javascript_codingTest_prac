const fs = require("fs");
const inputs = fs.readFileSync(0).toString().trim().split("\n").map((input) => input.split(" ").map(Number));

const [N, M] = inputs.shift();

let baskets = Array.from(new Array(N), (_, k) => k+1);

inputs.forEach(([i, j]) => {
    const [targetI, targetJ] = [i-1, j];
    baskets = [...baskets.slice(0, targetI), ...baskets.slice(targetI, targetJ).reverse(), ...baskets.slice(targetJ)];
})

console.log(baskets.join(" "))

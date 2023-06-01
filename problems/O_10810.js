const fs = require('fs');
const inputLines = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = inputLines.shift().split(" ").map(Number);

const baskets = new Array(N).fill(0);
for(line of inputLines) {
    let [i, j, k] = line.split(" ").map(Number);
    baskets.fill(k, i-1, j);
}
console.log(baskets.join(' '));
const fs = require('fs');
const inputLines = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = inputLines.shift().split(" ").map(Number);

const baskets = Array.from(new Array(N), (_, k) => k+1);
for(line of inputLines) {
    let [i, j] = line.split(" ").map(Number);
    [baskets[i-1],baskets[j-1]] = [baskets[j-1],baskets[i-1]];
}

console.log(baskets.join(" "))
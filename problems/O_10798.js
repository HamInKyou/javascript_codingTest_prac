const fs = require("fs");

const inputData = fs.readFileSync(0).toString().trim().split("\n").map((row) => row.split(""));

const [N, M] = [5, 15];

const result = [];
for(let m = 0; m < 15; m++) {
    for(let n = 0; n < N; n++) {
        if(inputData[n][m]) result.push(inputData[n][m])
    }
}

console.log(result.join(""))
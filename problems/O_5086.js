const TYPE = {
    'FACTOR' : 'factor',
    'MULTIPLE' : 'multiple',
    'NEITHER' : 'neither'
}

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n").map((row) => row.split(" ").map(Number));

const result = [];

for (let [num1, num2] of inputData) {
    const isEnd = num1 === 0 && num2 === 0;
    if(isEnd) break;
    result.push(TYPE[getType(num1, num2)]);
}

console.log(result.join("\n"))



//functions
function getType(num1, num2) {
    if(num1 % num2 === 0) return 'MULTIPLE';
    if(num2 % num1 === 0) return 'FACTOR';
    return 'NEITHER'
}
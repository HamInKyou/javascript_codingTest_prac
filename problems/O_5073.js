const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n").map((row) => row.split(" ").map(Number));

const RESULT_TYPE = {
    EQUILATERAL: 'Equilateral',
    ISOSCELES: 'Isosceles',
    SCALENE: 'Scalene',
    INVALID: 'Invalid'
}

function getResult(input) {
    if(isInvalid(input)) return RESULT_TYPE.INVALID;

    const inputSet = new Set(input);
    if(inputSet.size === 1) return RESULT_TYPE.EQUILATERAL;
    if(inputSet.size === 2) return RESULT_TYPE.ISOSCELES;
    return RESULT_TYPE.SCALENE;
}

function isInvalid(input) {
    const max = Math.max(...input);
    const maxIdx = input.findIndex((num) => num===max);
    const others = [...input.slice(0, maxIdx), ...input.slice(maxIdx+1)];

    return max >= others.reduce((acc,cur) => acc+cur, 0);
}

const result = []
for(let input of inputData) {
    if(input.every((num) => num === 0)) break;
    result.push(getResult(input));
}

console.log(result.join("\n"));
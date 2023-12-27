const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const RESULT_TYPE = {
    'EQUILATERAL' : 'Equilateral',
    'ISOSCELES' : 'Isosceles',
    'SCALENE' : 'Scalene',
    'ERROR' : 'Error'
}

function getResultType(inputData) {
    if(isError(inputData)) return RESULT_TYPE.ERROR;
    if(isEquilateral(inputData)) return RESULT_TYPE.EQUILATERAL;
    if(isIsosceles(inputData)) return RESULT_TYPE.ISOSCELES;
    return RESULT_TYPE.SCALENE;
}

function isError(inputData) {
    return inputData.reduce((acc, cur) => acc+cur, 0) !== 180;
}
function isEquilateral(inputData) {
    return inputData.every((value) => value === 60);
}

function isIsosceles(inputData) {
    return new Set(inputData).size === 2;
}

console.log(getResultType(inputData))


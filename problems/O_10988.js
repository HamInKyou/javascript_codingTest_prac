const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const inputArr = [...input];
const reversedInputArr = [...input].reverse();

if(inputArr.length !== reversedInputArr.length) {
    console.log(0);
    return;
}
console.log(inputArr.filter((char, i) => char === reversedInputArr[i]).length === inputArr.length? 1 : 0)


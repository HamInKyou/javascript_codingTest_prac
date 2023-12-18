const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n").map(Number);

function get약수ListExcludeTargetNum({targetNum}) {
    const result = [];
    for(let i = 1; i < targetNum; i++) {
        if(targetNum % i > 0) continue;
        result.push(i);
    }
    return result;
}

const result = [];
const END_TRIGGER = -1
for(let targetNum of inputData) {
    if(targetNum === END_TRIGGER) break;
    const 약수ListExcludeTargetNum = get약수ListExcludeTargetNum({targetNum:targetNum});
    if(약수ListExcludeTargetNum.reduce((acc, cur) => acc+cur, 0) !== targetNum) {
        result.push(`${targetNum} is NOT perfect.`);
        continue;
    }
    result.push(`${targetNum} = ${약수ListExcludeTargetNum.join(" + ")}`);
}

console.log(result.join("\n"))
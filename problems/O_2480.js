const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");

const dices = {};
for( dice of inputData) {
    if(dices[dice]) dices[dice] += 1;
    else dices[dice] = 1;
};

const diceArr = Object.keys(dices)
if(diceArr.length === 3) {
    console.log(Math.max(...diceArr.map(Number))*100)
} else if(diceArr.length === 2) {
    console.log(1000+ diceArr.filter((dice)=>dices[dice] === 2)[0]*100)
} else {
    console.log(10000+diceArr[0]*1000)
}


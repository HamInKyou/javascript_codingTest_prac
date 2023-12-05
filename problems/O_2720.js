const UNIT_QUARTER = 25;
const UNIT_DIME = 10;
const UNIT_NICKEL = 5;
const UNIT_PENNY = 1;

const fs = require("fs");
const [_, ...거스름돈List] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const result = 거스름돈List.map((거스름돈) => {
    let 현재거스름돈 = 거스름돈
    const quarter = Math.floor(현재거스름돈 / UNIT_QUARTER);
    현재거스름돈 %= UNIT_QUARTER;
    const dime = Math.floor(현재거스름돈 / UNIT_DIME);
    현재거스름돈 %= UNIT_DIME;
    const nickel = Math.floor(현재거스름돈 / UNIT_NICKEL);
    현재거스름돈 %= UNIT_NICKEL;
    const penny = Math.floor(현재거스름돈 / UNIT_PENNY);

    return `${quarter} ${dime} ${nickel} ${penny}`
})

console.log(result.join("\n"))
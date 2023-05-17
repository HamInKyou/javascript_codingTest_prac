const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [A, B] = inputData[0].split(" ").map(Number);
const C = Number(inputData[1]);

let hour = Math.floor((B + C) / 60);
let minute = (B + C) % 60;
hour = (hour + A) % 24
console.log(hour, minute)

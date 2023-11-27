const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n").map((row) => row.split((" ")));

const SCORE = {
    'A+' : 4.5,
    'A0' : 4.0,
    'B+' : 3.5,
    'B0' : 3.0,
    'C+' : 2.5,
    'C0' : 2.0,
    'D+' : 1.5,
    'D0' : 1.0,
    'F' : 0.0,
}

const filteredInputData = inputData.filter(([subject,time,score])=> score !== 'P')

const {totalTime, totalScore} = filteredInputData.reduce((acc, cur) => {
    const [subject, time, score] = cur;
    return {
        totalTime: acc.totalTime + Number(time),
        totalScore: acc.totalScore + Number(time)*SCORE[score]
    }
}, {totalTime: 0, totalScore: 0})

const result = totalScore/totalTime;

console.log(result.toFixed(6))
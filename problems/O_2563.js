const fs = require("fs");

const inputData = fs.readFileSync(0).toString().trim().split("\n");

const SIZE_BOARD = 100
const SIZE_PAPER = 10;
const N = Number(inputData.shift());
const positions = inputData.map((points) => points.split(" ").map(Number));

const board =  Array.from(new Array(SIZE_BOARD), () => new Array(SIZE_BOARD).fill(0));

positions.forEach((position) => {
    for(let i = position[0]-1; i < position[0]+SIZE_PAPER-1; i++ ) {
        for(let j = position[1]-1; j < position[1]+SIZE_PAPER-1; j++) {
            board[i][j] = 1;
        }
    }
})

const result = board.reduce((total, curRow) => {
    return curRow.reduce((rowTotal,cur) => {
        return rowTotal+cur;
    }, 0) + total;
}, 0)

console.log(result)
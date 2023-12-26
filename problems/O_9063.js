const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData.shift());
const points = inputData.map((str) => str.split(" ").map(Number));

function getArea (n, points) {
    if(n < 1) return 0;

    const maxPoint = [-10_000, -10_000];
    const minPoint = [10_000, 10_000];

    for(let [pointX, pointY] of points) {
        if(pointX > maxPoint[0]) {
            maxPoint[0] = pointX;
        }
        if(pointY > maxPoint[1]) {
            maxPoint[1] = pointY;
        }
        if(pointX < minPoint[0]) {
            minPoint[0] = pointX;
        }
        if(pointY < minPoint[1]) {
            minPoint[1] = pointY
        }
    }

    return (maxPoint[0] - minPoint[0])*(maxPoint[1]-minPoint[1])
}

console.log(getArea(N, points));
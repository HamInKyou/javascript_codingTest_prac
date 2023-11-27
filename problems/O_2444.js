const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

const drawStars = ({startIdx, amount}) => {
    const space = Array.from(new Array(startIdx), () => ' ');
    const stars = Array.from(new Array(amount), () => '*');
    console.log([...space, ...stars].join(""));
}

for(let i = 1; i <= N; i++) {
    drawStars( {startIdx: N-i, amount: (2*i)-1});
}
for(let i = N-1; i > 0; i--) {
    drawStars( {startIdx: N-i, amount: (2*i)-1});
}
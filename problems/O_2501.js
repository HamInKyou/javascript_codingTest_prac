const fs = require("fs");
const [N, K] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const 약수List = [];

for(let i = 1; i <= N; i++) {
    if(N % i > 0) continue;
    약수List.push(i);
}

console.log(약수List[K-1] ? 약수List[K-1] : 0)
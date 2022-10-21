const fs = require("fs");
const [a, b, v] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

// (a-b)*days + b > v  이 순간 days가 궁금
// days > (v-b)/(a-b)  days를 좌항으로 넘기면 이런 형식
// 결과가 소숫점일 경우.. days는 정수기에 그거보다 큰 정수면 돼.
const day_cnt = Math.ceil((v - b) / (a - b));
console.log(day_cnt);

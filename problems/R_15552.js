//const보다 let이 빠르다. 반복문 안에서는 let을 쓰려고 하자
const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split("\n");
const [n, ...testCase] = inputData;

let answer = "";
for (let i = 0; i < n; i++) {
  let [a, b] = testCase[i].split(" ");
  answer += Number(a) + Number(b) + "\n";
}
console.log(answer);

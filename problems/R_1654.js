const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [_, n] = inputData.shift().split(" ").map(Number); //첫째줄 pop
const lines = inputData.map(Number);
let left = 0;
let right = Math.max(...lines); //가장 큰값을 우측 끝으로

while (left <= right) {
  let mid = Math.floor((left + right) / 2); //중간 찾기
  let lineAmount = lines.reduce((acc, cur) => acc + Math.floor(cur / mid), 0); //중간 값으로 자른 랜선의 개수 구하기

  if (lineAmount >= n) {
    //필요한 라인 개수보다 같거나 더 많이 챙겼을 경우
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
console.log(right);

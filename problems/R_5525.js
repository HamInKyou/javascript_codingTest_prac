const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(inputData[0]);
const M = Number(inputData[1]);
const S = inputData[2];

let cnt = 0;
let patternCnt = 0; // "IOI" 패턴 연속 횟수
for (let i = 1; i < M - 1; i++) {
  if (S[i - 1] === "I" && S[i] === "O" && S[i + 1] === "I") {
    patternCnt++;
    if (patternCnt === N) {
      // "IOI"가 n번 반복되었을 경우
      cnt++; //"타겟 카운트 + 1"
      patternCnt--; //"패턴 내부에 시작점 또 있을 수 있으므로 하나 낮춰주기"
    }
    i++; //다음 IOI패턴 찾을 수 있도록 +1 해줘서 다음 반복문 +2에서 시작하게
    continue;
  }
  patternCnt = 0;
}
console.log(cnt);

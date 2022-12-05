const fs = require("fs");
const [strA, strB] = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = [strA.length, strB.length];

//최장 공통 부분수열
const LCS = Array.from(new Array(N + 1), () => new Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  let charA = strA[i - 1];
  for (let j = 1; j <= M; j++) {
    let charB = strB[j - 1];
    if (charA !== charB) {
      LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
    } else {
      LCS[i][j] = LCS[i - 1][j - 1] + 1;
    }
  }
}

console.log(LCS[N][M]);

//참고 : https://velog.io/@emplam27/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-LCS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Longest-Common-Substring%EC%99%80-Longest-Common-Subsequence

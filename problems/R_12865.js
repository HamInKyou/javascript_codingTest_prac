const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n").map((str) => str.split(" ").map(Number));

const [N, K] = inputData.shift();

//이차원 배열에서 행(n)은 담으려고 한 물건의 개수 (넣을까? 뺄까? 몇번째?)
//이차원 배열에서 열(k)는 배낭의 한계
//이차원 배열에서 [n][k]는 n번까지 물건들 중에서 최적으로 고른 물건들 가치 합
const DPbag = Array.from(new Array(N+1), () => new Array(K+1).fill(0));

for(let n = 0; n < N; n++) { //물건 하나씩 검사
    const [weight, value] = inputData[n]; //물건의 무게와 가치 파싱
    for(let k = 0; k <= K; k++) { //배낭의 가능한 모든 무게 고려
        if (k < weight) { //배낭한계보다 물건이 무겁다면
            DPbag[n+1][k] = DPbag[n][k]; //그대로 (넣지 말기)
        } else { //배낭한계보다 물건이 가볍거나 같다면
            DPbag[n+1][k] = Math.max(DPbag[n][k], DPbag[n][k-weight] + value) //현재거 안담는 경우, 이전거빼고 현재거 담는 경우와 비교해서 가치 높은거
        }
    }
}

console.log(DPbag[N][K])
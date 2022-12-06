const fs = require("fs");
const N = Number(fs.readFileSync(0));

let cnt = 0;
const queenPosition = new Array(N).fill(-1);
function isPromising(targetY, targetX) {
  //해당 위치가 유망한지?
  for (let y = 0; y < targetY; y++) {
    //이전에 놓았던 퀸들 검사
    if (targetX === queenPosition[y]) return false; //같은 열에 이미 퀸 놓았을 경우
    if (Math.abs(targetX - queenPosition[y]) === targetY - y) return false; // 열차이 = 행차이 -> 대각선에 있을 경우
  }
  return true;
}
function n_queens(y) {
  if (y === N) {
    //마지막 행까지 queen 배치 완료했을 경우
    cnt++;
    return;
  }
  for (let x = 0; x < N; x++) {
    //현재(y행) 에서 퀸 둘 수 있음 두기
    if (isPromising(y, x)) {
      queenPosition[y] = x;
      n_queens(y + 1);
    }
  }
}

n_queens(0);
console.log(cnt);

const fs = require("fs");
const [n, ...stairs] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const dp = new Array(n);
dp[0] = stairs[0]; //계단 한개까지의 최대값
dp[1] = stairs[0] + stairs[1]; //계단 두개까지의 최대값 : 계단 두개면 다 밟는게 이득
dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2]; //계단 세개까지의 최대값 : 하나 밟고 쩜프 혹은 쩜프하고 하나밟기 중에 큰거

for (let i = 3; i < n; i++) {
  //네번째 계단부터 차례대로 구해서 n번째 계단까지의 최대 구하기
  //밟기(i-3) 쩜프 밟기(i-1) 밟기(i) / 밟기(i-2) 쩜프 밟기(i) 중 큰거 고르기
  dp[i] = Math.max(dp[i - 3] + stairs[i - 1], dp[i - 2]) + stairs[i];
}
console.log(dp[n - 1]);

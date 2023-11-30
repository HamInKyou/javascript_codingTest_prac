const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");

const N = [...inputData[0]];
const B = Number(inputData[1]);

const 진법 = [
  ...Array.from(new Array(10), (_, k) => `${k}`),
  ...Array.from(new Array(26), (_, k) =>
    String.fromCharCode("A".charCodeAt() + k)
  ),
];

const 자릿수별_값 = N.map(
  (v, i) => 진법.indexOf(v) * Math.pow(B, N.length - i - 1)
);

const result = 자릿수별_값.reduce((acc, cur) => acc + cur, 0);

console.log(result);

/**
 * 이렇게 하지 않아도..
 * parseInt 메소드를 활용했다면 금방 끝났을텐데..
 */

const fs = require("fs");
const N = BigInt(fs.readFileSync(0));

const FIBONACCI_MATRIX = [
  [0, 1],
  [1, 1],
];
const MODULER = BigInt(1000000007);

function dotMatrix(matA, matB) {
  const resultMatrix = [
    [BigInt(0), BigInt(0)],
    [BigInt(0), BigInt(0)],
  ];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        resultMatrix[i][j] += BigInt(matA[i][k]) * BigInt(matB[k][j]);
      }
      resultMatrix[i][j] %= MODULER;
    }
  }
  return resultMatrix;
}

function fibonacci(n) {
  if (n === BigInt(1)) return FIBONACCI_MATRIX;
  if (n % BigInt(2)) {
    const resultMatrix = fibonacci(n - BigInt(1));
    return dotMatrix(FIBONACCI_MATRIX, resultMatrix);
  }
  const resultMatrix = fibonacci(n / BigInt(2));
  return dotMatrix(resultMatrix, resultMatrix);
}

const resultMatrix = fibonacci(N);
const result = Number(resultMatrix[1][0]);
console.log(result);

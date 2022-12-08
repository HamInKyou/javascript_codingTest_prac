const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, B] = inputData.shift().split(" ").map(Number);
const matrix = inputData.map((row) => row.split(" ").map(Number));

function matrixSimpler(targetMatrix) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      targetMatrix[i][j] %= 1000;
    }
  }
}

function matrixDot(matrixA, matrixB) {
  let resultMatrix = Array.from(new Array(N), () => new Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  matrixSimpler(resultMatrix);
  return resultMatrix;
}

function matrixPow(matrix, b) {
  if (b === 1) {
    matrixSimpler(matrix);
    return matrix;
  }
  let curMatrix = matrixPow(matrix, Math.floor(b / 2));
  if (b % 2) {
    //홀
    return matrixDot(matrixDot(curMatrix, curMatrix), matrix);
  } else {
    //짝
    return matrixDot(curMatrix, curMatrix);
  }
}

console.log(
  matrixPow(matrix, B)
    .map((row) => row.join(" "))
    .join("\n")
);

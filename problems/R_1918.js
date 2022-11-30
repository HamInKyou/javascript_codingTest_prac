const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim();
const stack = [];
const result = [];

for (let c of inputData) {
  if (c === "(") {
    // "(" 스택에 넣어주기
    stack.push(c);
  } else if (c === ")") {
    // "(" 나올 때까지 스택에 있는 남은 연산 다 빼서 결과에 넣어주기
    while (stack.length && stack[stack.length - 1] !== "(") {
      result.push(stack.pop());
    }
    stack.pop(); //"(" 지워주기
  } else if (c === "+" || c === "-") {
    // "(" 나올 때까지 스택에 있는 남은 연산 다 빼서 결과에 넣어주기
    while (stack.length && stack[stack.length - 1] !== "(") {
      result.push(stack.pop());
    }
    //연산자 넣어주기
    stack.push(c);
  } else if (c === "*" || c === "/") {
    // "* 또는 /" 가 최근 연산일 경우 그 연산 결과에 넣어주기
    while (
      stack.length &&
      (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
    ) {
      result.push(stack.pop());
    }
    //연산자 넣어주기
    stack.push(c);
  } else {
    //피연산자 넣어주기
    result.push(c);
  }
}

while (stack.length) {
  result.push(stack.pop());
}

console.log(result.join(""));

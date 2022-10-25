const fs = require("fs");
const [n, ...commandDatas] = fs.readFileSync(0).toString().trim().split("\n");

const commandsResult = [];
const stack = [];
for (let i = 0; i < Number(n); i++) {
  let [commandStr, commandNum] = commandDatas[i].split(" ");

  switch (commandStr) {
    case "push":
      stack.push(commandNum);
      break;
    case "pop":
      commandsResult.push(stack.pop() || -1);
      break;
    case "size":
      commandsResult.push(stack.length);
      break;
    case "empty":
      commandsResult.push(stack.length > 0 ? 0 : 1);
      break;
    case "top":
      commandsResult.push(stack.length > 0 ? stack[stack.length - 1] : -1);
      break;
  }
}
console.log(commandsResult.join("\n"));

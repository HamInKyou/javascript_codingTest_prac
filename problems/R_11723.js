const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const M = Number(inputData.shift());
const commands = inputData.map((command) => command.split(" "));

const FULL = parseInt("11111111111111111111", 2);
let bits = 0;
const result = [];
for (let i = 0; i < M; i++) {
  let [command, element] = commands[i];
  let x = Number(element) - 1;
  switch (command) {
    case "add":
      bits = bits | (1 << x);
      break;
    case "remove":
      bits = bits & ~(1 << x);
      break;
    case "check":
      result.push((bits & (1 << x)) > 0 ? 1 : 0);
      break;
    case "toggle":
      if (bits & (1 << x)) bits = bits & ~(1 << x);
      else bits = bits | (1 << x);
      break;
    case "all":
      bits = FULL;
      break;
    case "empty":
      bits = 0;
      break;
  }
}
console.log(result.join("\n"));

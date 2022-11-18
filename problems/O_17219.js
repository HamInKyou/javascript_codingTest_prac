const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = inputData.shift().split(" ").map(Number);

const passwords = {};
for (let i = 0; i < N; i++) {
  let [url, password] = inputData[i].split(" ");
  passwords[url] = password;
}
const results = [];
for (let i = N; i < N + M; i++) {
  let target = inputData[i];
  results.push(passwords[target]);
}
console.log(results.join("\n"));

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(inputData[0]);
const fieldData = inputData[1].split(" ").map(Number).sort();
const targetData = inputData[3].split(" ").map(Number);

const findData = (target) => {
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (fieldData[mid] === target) {
      return 1;
    }

    if (fieldData[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return 0;
};

const result = targetData.map(findData);

console.log(result.join("\n"));

const fs = require("fs");
const [n, ...nums] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const result1 = nums.reduce((acc, cur) => acc + cur, 0) / n;
console.log(Number(result1.toFixed(0)) !== 0 ? Math.round(result1) : 0);

nums.sort((a, b) => a - b);
const result2 = nums[Math.floor(n / 2)];
console.log(result2);

const frequentNumObj = {};
for (let i = 0; i < n; i++) {
  if (frequentNumObj[nums[i]]) {
    frequentNumObj[nums[i]] += 1;
    continue;
  }
  frequentNumObj[nums[i]] = 1;
}
const maxAmount = Math.max(...Object.values(frequentNumObj));
const maxAmountNums = Object.keys(frequentNumObj)
  .map(Number)
  .filter((num) => frequentNumObj[num] === maxAmount)
  .sort((a, b) => a - b);
const result3 = maxAmountNums.length > 1 ? maxAmountNums[1] : maxAmountNums[0];
console.log(result3);

const result4 = Math.max(...nums) - Math.min(...nums);
console.log(result4);

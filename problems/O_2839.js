const fs = require("fs");
const n = Number(fs.readFileSync(0));

let bag_5 = Math.floor(n / 5);
let bag_3 = 0;
let last_sugar = n;
while (bag_5 >= 0) {
  last_sugar = n - 5 * bag_5;
  if (last_sugar > 0) {
    bag_3 = Math.floor(last_sugar / 3);
    last_sugar = last_sugar - 3 * bag_3;
    if (last_sugar === 0) {
      break;
    }
  } else {
    break;
  }
  bag_5--;
}

console.log(last_sugar > 0 ? -1 : bag_5 + bag_3);

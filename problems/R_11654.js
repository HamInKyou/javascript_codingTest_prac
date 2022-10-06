const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim();
console.log(inputData.charCodeAt(0));

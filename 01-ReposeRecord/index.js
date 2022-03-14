const fs = require("fs");

const patterns = fs.readFileSync("./input.txt", "utf-8").split("\n").sort();

console.log(patterns);

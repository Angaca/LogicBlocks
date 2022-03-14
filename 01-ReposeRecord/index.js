const fs = require("fs");
const { getSleepiestGuard } = require("../getSleepiestGuard");
const { getSleepiestMinute } = require("../getSleepiestMinute");

const guardsLogs = fs.readFileSync("./input.txt", "utf-8").split("\n").sort();

const sleepiestGuard = getSleepiestGuard(guardsLogs);

const sleepiestMinute = getSleepiestMinute(guardsLogs, sleepiestGuard);

console.log(sleepiestGuard, sleepiestMinute);

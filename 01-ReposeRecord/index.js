const fs = require("fs");

const guardsLogs = fs.readFileSync("./input.txt", "utf-8").split("\n").sort();

const guardsSleepMins = {};
let actualGuard = null;
let sleepTime = 0;
let wakeTime = 0;

guardsLogs.forEach((log) => {
  const matchGuards = /#\d*/g.exec(log);
  const matchMinutes = /:+(\d{2})/g.exec(log);
  let sleepCircle = false;
  if (matchGuards) {
    if (!guardsSleepMins[matchGuards[0]]) guardsSleepMins[matchGuards[0]] = 0;
    actualGuard = matchGuards[0];
  }
  if (matchMinutes && log.includes("asleep")) {
    sleepTime = matchMinutes[1];
  }
  if (matchMinutes && log.includes("wakes")) {
    sleepCircle = true;
    wakeTime = matchMinutes[1];
  }
  if (sleepCircle) {
    const totalSleep = wakeTime - sleepTime - 1;
    guardsSleepMins[actualGuard] += totalSleep;
  }
});

const mostSleeperGuard = Object.entries(guardsSleepMins).sort(
  ([, a], [, b]) => b - a
)[0][0];

console.log(mostSleeperGuard);

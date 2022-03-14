exports.getSleepiestGuard = (guardsLogs) => {
  const sleepiestGuard = {};
  let actualGuard = null;
  let sleepCircle = false;
  let sleepTime = 0;
  let wakeTime = 0;

  guardsLogs.forEach((log) => {
    const matchGuards = /#\d*/g.exec(log);
    const matchMinutes = /:+(\d{2})/g.exec(log);
    sleepCircle = false;

    if (matchGuards) {
      if (!sleepiestGuard[matchGuards[0]]) sleepiestGuard[matchGuards[0]] = 0;
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
      sleepiestGuard[actualGuard] += totalSleep;
    }
  });

  return Object.entries(sleepiestGuard).sort(([, a], [, b]) => b - a)[0][0];
};

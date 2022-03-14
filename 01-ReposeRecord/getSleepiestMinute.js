exports.getSleepiestMinute = (guardsLogs, sleepiestGuard) => {
  const minsSleep = {};
  let actualGuard = null;
  let sleepCircle = false;
  let sleepTime = 0;
  let wakeTime = 0;

  guardsLogs.forEach((log) => {
    const matchGuards = /#\d*/g.exec(log);
    const matchMinutes = /:+(\d{2})/g.exec(log);
    sleepCircle = false;

    if (matchGuards) actualGuard = matchGuards[0];
    if (actualGuard === sleepiestGuard) {
      if (matchMinutes && log.includes("asleep")) {
        sleepTime = matchMinutes[1];
      }
      if (matchMinutes && log.includes("wakes")) {
        sleepCircle = true;
        wakeTime = matchMinutes[1];
      }
      if (sleepCircle) {
        for (let min = wakeTime - 1; min > sleepTime; min--) {
          if (!minsSleep[min]) minsSleep[min] = 0;
          minsSleep[min]++;
        }
      }
    }
  });

  return Object.entries(minsSleep).sort(([, a], [, b]) => b - a)[0][0];
};

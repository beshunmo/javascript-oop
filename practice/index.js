const Watch = require('./watch');
const Alarm = require('./alarm');
const Timer = require('./timer');
const Stopwatch = require('./stopwatch');

//const watch = new Watch({ onTick: watch => console.info(watch.toString()) });

// const alarm = new Alarm({
//     h: 22,
//     m: 44,
//     s: 0,
//     onTick: alarm => console.info(alarm.toString()),
//     onAlarm: () => console.log("ALARM")
// });

// const timer = new Timer({
//     h: 0,
//     m: 0,
//     s: 15,
//     onTick: timer => console.log(timer.toString()),
//     onEnd: () => console.log('Done')
// });
// timer.start();

// const stopwatch = new Stopwatch(s => console.log(s.toString()));
// stopwatch.start();
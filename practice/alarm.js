const Watch = require('./watch');

class Alarm extends Watch {
    constructor({ h, m, s, onTick, onAlarm = () => {} }) {
        super({ onTick });

        this.alarmH = h;
        this.alarmM = m;
        this.alarmS = s;
        this.onAlarm = onAlarm;
    }

    tick() {
        super.tick();

        if (this.h === this.alarmH && this.m === this.alarmM && this.s === this.alarmS) {
            this.onAlarm();
        }
    }
}

module.exports = Alarm;
const Time = require('./time');

class Timer extends Time {
    constructor({ h = 0, m = 0, s = 0, onTick = () => {}, onEnd = () => {} }) {        
        super();
        
        this.h = h;
        this.m = m;
        this.s = s;
        this.interval = null;
        this.onTick = onTick;
        this.onEnd = onEnd;

        this.tick = this.tick.bind(this);
    }

    start() {
        this.interval = setInterval(this.tick, 1000);
    }

    pause() {
        clearInterval(this.interval);
        this.interval = null;
    }

    stop() {
        this.pause();
        this.h = 0;
        this.m = 0;
        this.s = 0;
    }

    tick() {
        if (this.h === 0 && this.m === 0 && this.s === 0) {
            this.stop();
            this.onEnd();

            return;
        } else if (this.m === 0 && this.s === 0) {
            this.h -= 1;
            this.m = 59;
            this.s = 59;
        } else if (this.s === 0) {
            this.m -= 1;
            this.s = 59;
        }

        this.onTick(this);
        this.s -= 1;
    }
}

module.exports = Timer;
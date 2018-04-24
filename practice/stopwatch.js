const Time = require('./time');

class Stopwatch extends Time {
    constructor(onTick = () => {}) {
        super();

        this.h = 0;
        this.m = 0;
        this.s = 0;
        this.ms = 0;
        this.interval = null;
        this.onTick = onTick;

        this.tick = this.tick.bind(this);
    }

    start() {
        this.interval = setInterval(this.tick, 10);
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
        this.ms = 0;
    }

    tick() {
        this.ms += 1;

        if (this.ms === 100) {
            this.ms = 0;
            this.s += 1;
        }

        if (this.s === 60) {
            this.s = 0;
            this.m += 1;
        }
        
        if (this.m === 60) {
            this.s = 0;
            this.m = 0;
            this.h += 1;
        }

        this.onTick(this);
    }

    toString() {
        let string = super.toString();
        let ms = Time.formatSegment(this.ms);

        return `${string}.${ms}`;
    }

    toJSON() {
        let json = super.toJSON();
        json.ms = Time.formatSegment(this.ms);

        return json;
    }
}

module.exports = Stopwatch;
const Time = require('./time');

class Watch extends Time {
    constructor({ onTick = () => {} }) {
        super();

        this.interval = null;
        this.date = Date.now();
        this.onTick = onTick;
        this.tick = this.tick.bind(this);

        this.init();
    }

    init() {
        this.interval = setInterval(this.tick, 1000);
    }

    destroy() {
        clearInterval(this.interval);
        this.interval = null;
    }

    tick() {
        this.date = new Date(Date.now());
        this.h = this.date.getHours();
        this.m = this.date.getMinutes();
        this.s = this.date.getSeconds();

        this.onTick(this);
    }
}

module.exports = Watch;
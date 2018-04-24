class Time {
    static formatSegment(segment) {
        return segment > 9 ? segment.toString() : `0${segment}`;
    }

    toString() {
        let h = Time.formatSegment(this.h);
        let m = Time.formatSegment(this.m);
        let s = Time.formatSegment(this.s);

        return `${h}:${m}:${s}`;
    }

    toJSON() {
        let h = Time.formatSegment(this.h);
        let m = Time.formatSegment(this.m);
        let s = Time.formatSegment(this.s);

        return { h, m, s };
    }
}

module.exports = Time;
const EventEmitter = require('events');

class Ticker extends EventEmitter {

    constructor(interval = 1000) {
        super();
        this.interval = interval;
    }

    get date() {
        return new Date();
    }

    start() {
        this.emit(Ticker.START, this.date);
        this.intervalId = setInterval(() => {
            this.emit(Ticker.TICK, this.date);
        }, this.interval);
    }

    stop() {
        this.emit(Ticker.STOP, this.date);
        clearInterval(this.intervalId);
    }
}


Ticker.START = 'start';
Ticker.TICK = 'tick';
Ticker.END = 'end';
Ticker.ERROR = 'error';

module.exports = Ticker;

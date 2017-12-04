const Ticker = require('./ticker');

const ticker = new Ticker(2000);

ticker.on(Ticker.START, (data) => console.log('Ticker: Started -->', data));
ticker.on(Ticker.TICK, (data) => console.log('Ticker: TICK -->', data));
ticker.on(Ticker.STOP, (data) => console.log('Ticker: STOPPED -->', data));
ticker.on(Ticker.ERROR, (error) => console.log('Ticker: ERROR -->', error));

ticker.start();

setTimeout(() => {
    ticker.stop();
}, 10000);

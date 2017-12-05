const logger = (message) => () => console.log('Logger --> ', message);

// console.clear();
setTimeout(logger('A is logged'), 1000);

setImmediate(logger('From setImmediate'));
process.nextTick(logger('From next tick.'));
process.nextTick(logger('From second next tick.'));

// Scheduling using setTimeout
const interval = 2000;
const scheduler = (count = 0) => {
    setTimeout(() => {
        console.log('Count --> ', count);
        scheduler(++count);
    }, interval);
};
scheduler();

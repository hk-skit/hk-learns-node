const async = require('async');
const request = require('request');

const done = (error, results) => {
    if (error) {
        throw error;
    }
    console.log('Results:', results);
};

const MAX_CONCURRENCY = 5;

const worker = (task, callback) => {
    request.post({
        url: 'http://localhost:8080',
        body: JSON.stringify(task)
    }, (error, response, body) => callback(error, body && JSON.parse(body)));
};

const queue = async.queue(worker, MAX_CONCURRENCY);
queue.drain = done;

const n = new Array(10).fill(null).map((e, index) => index + 1);
n.forEach((i) => {
    queue.push(i, (error, result) => {
        if (error) {
            throw error;
        }
        console.log(`Number: ${i}, Squared: ${result}`);
    });
});
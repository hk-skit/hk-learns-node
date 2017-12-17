const request = require('request');
const async = require('async');

const waterfallOption = { url: 'http://localhost:8080', body: '3' };
const waterfallDone = (error, respnse, body) => {
    if (error) {
        throw error;
    }
    console.log('Waterfall inputs', waterfallOption.body);
    console.log('Waterfall result', body);
};

async.waterfall([
    (next) => request(waterfallOption, next),
    (response, body, next) => request({ ...waterfallOption, body }, next)
], waterfallDone);

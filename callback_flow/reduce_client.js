const async = require('async');
const request = require('request');
const { numbers } = require('../utils');

const collection = numbers(5);

const done = (error, results) => {
    if (error) {
        throw error;
    }
    console.log('Collection:', collection);
    console.log('Result:', results);
};

const iterator = (accumulator, value, callback) => {
    request.post({
        url: 'http://localhost:8080',
        body: JSON.stringify(value)
    }, (error, response, body) => {
        callback(error, body && (accumulator + JSON.parse(body)));
    });
};

async.reduce(collection, 0, iterator, done);
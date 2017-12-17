const async = require('async');
const request = require('request');
const { numbers } = require('../utils');

const collection = numbers(10);

const done = (error, results) => {
    if (error) {
        throw error;
    }
    console.log('Collection:', collection);
    console.log('Result:', results);
};

const isEven = (number) => number % 2 === 0;

const iterator = (value, callback) => {
    request.post({
        url: 'http://localhost:8080',
        body: JSON.stringify(value)
    }, (error, response, body) => {
        callback(error, body && isEven(JSON.parse(body)));
    });
};
console.log('Filtering...');
async.filter(collection, iterator, done);
console.log('Rejecting...');
async.reject(collection, iterator, done);
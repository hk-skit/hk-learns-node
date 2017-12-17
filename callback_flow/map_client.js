const async = require('async');
const request = require('request');
const { numbers } = require('../utils');

const done = (error, results) => {
    if (error) { throw error; }
    console.log('Results:', results);
};

const collection = numbers(10);

const iterator = (value, callback) => {
    request.post({
        url: 'http://localhost:8080',
        body: JSON.stringify(value)
    }, (error, response, body) => {
        callback(error, body && JSON.parse(body));
    });
};

async.map(collection, iterator, done);
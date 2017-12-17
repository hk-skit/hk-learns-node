const async = require('async');
const request = require('request');
const { numbers } = require('../utils');
const results = {};
const done = (error) => {
    if (error) {
        throw error;
    }
    console.log('Results:', results);
};

const collection = numbers(10);
const iterator = (number, callback) => {
    request.post(
        {
            url: 'http://localhost:8080',
            body: JSON.stringify(number)
        }, (error, response, body) => {
            if (error) {
                return callback(error);
            }
            results[number] = JSON.parse(body);
            callback();
        });
};
async.forEach(collection, iterator, done);
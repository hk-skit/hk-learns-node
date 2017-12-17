const request = require('request');

const async = require('async');

const options = new Array(4).fill({ url: 'http://localhost:8080' })
    .map((item) => {
        item.body = `${~~(Math.random() * 10)}`;
        return { ...item };
    });

const done = (error, results) => {
    if (error) {
        console.log('Something went wrong ', error);
    }
    options.forEach((option, index) => {
        console.log(`Number: ${option.body}, Square: ${results[index]}`);
    });
};

const tasks = options.map((option, index) => {
    return (next) => {
        request(option, (error, response, body) => {
            next(error, body && JSON.parse(body));
        });
    };
});

async.series(tasks, done);
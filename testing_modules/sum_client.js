const request = require('request');

const sum = (a, b, callback = () => { }) => {

    const options = {
        url: 'http://localhost:4000',
        qs: { a, b }
    };

    request(options, (error, response, body) => {
        if (error) {
            return callback(error);
        }
        let result;
        try {
            result = JSON.parse(body);
        } catch (err) {
            return callback(err);
        }
        return callback(null, result);
    });
};

module.exports = sum;
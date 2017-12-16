const request = require('request');
const { inspect } = require('util');
request.get({
    url: `http://localhost:4000/redirect`,
    followRedirect: true
}, (error, response, body) => {
    if (error) {
        throw error;
    }
    console.log(inspect({
        error,
        body: JSON.parse(body),
        res: {
            statusCode: response.statusCode
        }
    }))
});
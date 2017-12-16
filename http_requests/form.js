const request = require('request');
const { inspect } = require('util');

const options = {
    url: `http://localhost:4000/print/body`,
    method: 'POST',
    form: {
        a: 1,
        b: 2
    }
};

request(options, (error, response, body) => {
    if (error) {
        throw error;
    }
    console.log(body);
    console.log(inspect({
        error,
        body: JSON.parse(body),
        res: {
            statusCode: response.statusCode,
            headers: response.headers
        }
    }))
});
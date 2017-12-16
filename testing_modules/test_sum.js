const { test } = require('tap');
const sum = require('./sum_client');

test('sums 10 and 20', (t) => {

    sum(10, 20, (error, result) => {
        t.notOk(error, 'no error');
        t.equal(result, 30, '10 + 20 should be equal to 30');
        t.end();
    });

});

test('sums 10 and -20', (t) => {

    sum(10, -20, (error, result) => {
        t.notOk(error, 'no error');
        t.equal(result, -10, '10 + -20 should be equal to -10');
        t.end();
    });

});

const express = require('express');
const app = express();

const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
};

const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

// we can write configurable middlware as well. 
// It simply a curry function or closure.
const configurableMiddleware = (options) => {
    return (req, res, next) => { next(); };
};

app.use(myLogger);
app.use(requestTime);

app.get('/', (req, res, next) => {
    let responseText = `Hello World!!<br><small>Requested at:${req.requestTime}</small>`;
    res.end(responseText);
});

app.listen(8000, () => {
    console.log(`Listening at port:`, 8000);
});
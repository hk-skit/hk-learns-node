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

const middlewareFactory = (name, end, skip) => (req, res, next) => {
    console.log(`Middleware name: ${name}`);
    if (end) {
        // Middleware can invoke end anytime.
        return res.end(`Ended by ${name}`);
    }
    if (skip) {
        // Middleware can also skip entire stack and move to next route/stack.
        next('route');
    } else {
        // next middle from the stack.
        next();
    }
};
const middlewares = ['A', 'B', 'C', 'D'].map((name, index) => middlewareFactory(name, false, index === 1));
app.get('/middleware', ...middlewares);

app.get('/middleware', (req, res) => {
    res.end(req.originalUrl);
});

app.listen(8000, () => {
    console.log(`Listening at port:`, 8000);
});
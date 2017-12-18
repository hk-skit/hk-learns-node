const express = require('express');

const PORT = 8000;
const app = express();

app.get('/', (req, res, next) => {
    res.write('Hello World!! I am learning EXPRESS.');
    next();
});

app.get('/', (req, res) => {
    res.end('Recieved a GET request.');
});

app.post('/', (req, res) => {
    res.end('Received a POST request.');
});

// This route path will match requests to /about.
app.get('/about', function (req, res) {
    res.send('about')
});

// This route path will match requests to /random.text.
app.get('/random.text', function (req, res) {
    res.send('random.text')
});

// This route path will match acd and abcd.
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
});

// This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
});

// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd')
});

// This route path will match /abe and /abcde.
app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e')
});

// This route path will match anything with an “a” in the route name.
app.get(/a/, function (req, res) {
    res.send('/a/')
});

// This route path will match butterfly and dragonfly, but not butterflyman,
// dragonflyman, and so on.
app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/')
});

// To define routes with route parameters, simply specify the route parameters 
// in the path of the route as shown below.
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params);
});

// Using hyphen -
app.get('/flights/:from-:to', (req, res) => {
    res.send(req.params);
});

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});
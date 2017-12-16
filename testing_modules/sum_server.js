const http = require('http');
const { parse } = require('url');

const PORT = 4000;

const server = http.createServer((req, res) => {

    const { query } = parse(req.url, true);
    console.log('Adding... ', query.a, query.b);
    const result = +query.a + +query.b;
    res.end(`${result}`);

});

server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});
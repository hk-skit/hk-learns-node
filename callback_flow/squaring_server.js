const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {

    let body = ''

    req.setEncoding('utf8');

    req.on('data', (data) => {
        body += data;
    });

    req.on('end', () => {
        let n = JSON.parse(body);
        let square = Math.pow(n, 2);
        res.end(JSON.stringify(square));
    });

});

server.listen(PORT, () => {
    console.log('Listening at:', PORT);
});
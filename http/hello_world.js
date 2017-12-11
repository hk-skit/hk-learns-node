const http = require('http');

const PORT = 8000;
const HOST_NAME = '127.0.0.1';

const server = http.createServer((req, res) => {

    req.on('data', (data) => {
        console.log('Request body', data);
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // shorthand for above two statements
    // res.writeHead(200, {
    //  'Content-Type': 'text/plain'
    // });


    res.write('Hello World!!\n');
    // Can also be writtn as
    // res.end('Hello World!!');

    // We can extract some useful information from request object.
    res.write(`Request url: ${req.url}\n`);
    res.write(`Request Method: ${req.method}\n`);
    res.write('Request Headers:\n');
    res.write(JSON.stringify(req.headers, null, 4));
    res.end();

    res.on('error', (error) => {
        console.log('Something went wrong', error);
    });
});

server.listen(PORT, HOST_NAME, () => {
    console.log(`Listening at ${HOST_NAME}:${PORT}`);
});

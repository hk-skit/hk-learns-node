const http = require('http');
const fs = require('fs');

const HOST_NAME = '127.0.0.1';
const PORT = 8080;

// Avoiding Slow Client Problem.

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const readStream = fs.createReadStream(__filename);

    readStream.on('data', (data) => {
        if (!res.write(data)) {
            readStream.pause();
            console.log('ReadStream is pasued.');
        }
    });

    res.on('drain', () => {
        readStream.resume();
        console.log('ReadStream is resumed.');
    });

    readStream.on('end', () => {
        res.end();
        console.log('Reading is ended');
    });

});

server.listen(PORT, HOST_NAME, () => {
    console.log(`Listening to ${PORT}`);
});

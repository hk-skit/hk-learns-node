const http = require('http');

const PORT = 8000;
const HOST_NAME = '127.0.0.1';

const INTERVAL = 1000; // in ms

const server = http.createServer((req, res) => {

    let left = 10;

    const intervalId = setInterval(() => {

        for (let i = 0; i < 100; i++) {
            res.write(`${Date.now()} `);
        }
        left -= 1;
        res.write('\n');
        if (left === 0) {
            clearInterval(intervalId);
            res.end('All done');
        }

    }, INTERVAL);

});

server.listen(PORT, HOST_NAME, () => {
    console.log(`Listening at ${HOST_NAME}:${PORT}`);
});
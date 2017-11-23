const http = require('http');


const HOST_NAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`Hey There!! I am getting started with NodeJs. It's <em>AWESOME</em>!!`);
});

server.listen(PORT, HOST_NAME, () => {
    console.log(`Server running at http://${HOST_NAME}:${PORT}/`);
});

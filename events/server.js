const http = require('http');

const PORT = 8080;

const server = http.createServer();
const onRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end(`<h1>Learning NodeJs <em>Macha</em>!!</h1>`);
};

server.on('request', onRequest);
server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});

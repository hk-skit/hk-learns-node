const http = require('http');

const PORT = 3000;

const server = http.createServer();


const onRequest = (request, response) => {

    request.on('error', (err) => {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    response.on('error', (err) => {
        console.error(err);
    });

    const {
        method, url
    } = request;

    if (method === 'POST' && url === '/echo') {
        request.pipe(response);
    } else {
        response.statusCode = 404;
        response.end();
    }
};


server.on('request', onRequest);

server.listen(PORT, () => {
    console.log('Server is listening at port:', PORT);
});

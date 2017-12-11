const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = 8000;
const HOST_NAME = '127.0.0.1';

const server = http.createServer((request, response) => {

    const file = path.normalize(`.${request.url}`);
    console.log('Trying to serve ', file);

    const reportError = (error) => {
        console.log(error);
        response.writeHEAD(500);
        return response.end('Internal server error.');
    };

    fs.exists(file, (exists) => {

        if (!exists) {
            response.writeHead(404);
            return response.end('Not found.');
        }

        fs.stat(file, (error, stat) => {

            if (error) {
                return reportError(error);
            }

            if (stat.isDirectory()) {
                response.writeHead(403);
                return response.end('Forbidden');
            }

            const rs = fs.createReadStream(file);
            rs.on('error', reportError);
            response.writeHead(200);
            rs.pipe(response);
        });

    });

});

server.listen(PORT, HOST_NAME, () => {
    console.log(`Listening at ${HOST_NAME}:${PORT}`);
});

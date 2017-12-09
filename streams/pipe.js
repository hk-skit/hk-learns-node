const http = require('http');
const fs = require('fs');

const HOST_NAME = '127.0.0.1';
const PORT = 8080;

const FILE_PATH = `${__dirname}/sample.json`;

const server = http.createServer((request, response) => {

    response.setHeader('Content-Type', 'application/json');

    const rs = fs.createReadStream(FILE_PATH);
    rs.pipe(response);

    // TODO: Explicit end.
    //    rs.pipe(res, {
    //        end: false
    //    });
    //    rs.on('end', function () {
    //        res.write("And that's all, folks!");
    //        res.end();
    //    });
});

server.listen(PORT, HOST_NAME, () => {
    console.log(`Listening at ${HOST_NAME}:${PORT}`);
});

const request = require('request');
const http = require('http');

const PORT = 4000;

const server = http.createServer((req, res) => {

    const printBack = () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const { url, method, headers } = req;
        res.end(JSON.stringify({ url, method, headers }));
    };

    switch (req.url) {
        case '/redirect':
            res.writeHead(301, { 'Location': '/' });
            res.end(JSON.stringify({}));
            break;
        case '/print/body':
            req.setEncoding('utf8');
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            req.on('end', () => {
                res.end(JSON.stringify(body));
            });
            // req.pipe(res);
            break;
        default:
            printBack();
            break;
    }

});

server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`, PORT);
});
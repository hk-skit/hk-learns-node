const http = require('http');

const options = {
    host: 'www.google.com',
    port: 80,
    path: '/index.html'
};

http.get(options, (res) => {
    console.log('Got response:', res.statusCode);
    res.on('data', (data) => {
        console.log(data.toString());
    });
});
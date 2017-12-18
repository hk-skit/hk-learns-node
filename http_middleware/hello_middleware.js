const connect = require('connect');
const http = require('http');

const PORT = 8080;

const app = connect();

app.use((req, res) => {
    res.end('Hello World!!');
});

http.createServer(app).listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});
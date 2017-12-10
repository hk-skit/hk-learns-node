const net = require('net');

const HOST_NAME = '127.0.0.1';
const PORT = 8080;

const server = net.createServer((socket) => {

    socket.on('data', (data) => {
        console.log('Socket:data -->', data.toString());
    });

    socket.on('end', () => {
        console.log('Socket:end -->', 'Connection Closed.');
    });

});

server.on('listening', () => {
    console.log('Server:listening -->', 'Server is listening');
});

// Same as passing a callback in create server.
server.on('connection', (socket) => {
    const TTL = 3000;
    console.log('Server:connection -->', `Connection is established. It wll automatically closed after ${TTL}`);
    setTimeout(() => {
        socket.end();
        server.close();
    }, TTL);
});

server.on('close', () => {
    // Connection is closed means it's not bound to port anymore.
    console.log('Server:close', 'Connection is closed.');
});

server.listen(PORT, HOST_NAME, () => {
    console.log(`Listening at ${HOST_NAME}:${PORT}`);
});

// To connect to server use `telnet` or `nc` as below in terminal
// $ telnet localhost 8080
// $ nc localhost 8080

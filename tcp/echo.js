const net = require('net');

const PORT = 8080;
const HOST_NAME = '127.0.0.1';

const IDLE_TIME = 6000;

const isQuitOrExit = (str) => {
    str = str.toLowerCase().trim();
    return str === 'quit' || str === 'exit';
}


const server = net.createServer((socket) => {

    console.log('New Connection.');

    socket.setEncoding('utf-8');

    socket.write(`Hey There!! I repeat whatever you say. Type 'quit' or 'exit' to quit.\n`);

    socket.on('data', (data) => {
        const str = data.toString();
        console.log('Received:', str.trim());
        if (isQuitOrExit(str)) {
            socket.write('Bye, Bye!!');
            return socket.end();
        }
        socket.write(str);
    });

    socket.on('end', () => {
        console.log('Connection Closed.');
    });

    socket.setTimeout(IDLE_TIME, () => {
        socket.write('Timeout. Disconnecting Bye!');
        return socket.end();
    });
});

server.listen(PORT, HOST_NAME, () => {
    console.log(`Listening at ${HOST_NAME}:${PORT}`);
});

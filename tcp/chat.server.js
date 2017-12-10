const net = require('net');

const PORT = 8080;
const HOST_NAME = '127.0.0.1';

const server = net.createServer();

const id = ((counter = 0) => () => {
    counter += 1;
    return counter;
})();

const isLeaving = (str) => {
    str = str.toLowerCase().trim();
    return ['bye', 'exit', 'quit'].some((s) => str === s);
};

// All the connected clients.
const clients = [];

server.on('error', (error) => {
    console.log('Server error:', error.message);
});

server.on('end', () => {
    console.log('Server closed.');
});

server.on('connection', (socket) => {


    const client = {
        socket,
        id: `user_${id()}`
    };
    clients.push(client);
    console.log('New connection', client.id);

    socket.write(`Welcome ${client.id}!!\n`);

    socket.on('data', (data) => {

        console.log('Data received:', data);

        if (isLeaving(data.toString())) {
            socket.write('Bye bye!!');
            return socket.end();
        }

        clients.forEach((otherClient) => {
            if (client !== otherClient) {
                otherClient.socket.write(`${client.id}:${data}`);
            }
        });

    });

    socket.on('close', () => {
        console.log('Connection closed.');
        const index = clients.indexOf(client);
        clients.splice(index, 1);
    });

});

server.listen(PORT, HOST_NAME, () => console.log(`Listening at ${HOST_NAME}:${PORT}`));

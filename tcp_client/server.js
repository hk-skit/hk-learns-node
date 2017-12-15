const net = require('net');

const PORT = 4000;

const RETRY_TIMEOUT = 3000;
const MAX_RETRIES = 10;
let retriedTimes = 0;
let quitting = false;
let conn;
// Since standard stream is initialised in paused state.
// So we have to resume it. 
process.stdin.resume();

process.stdin.on('data', (data) => {
    const str = data.toString();
    if (str.trim().toLowerCase() === 'quit') {
        quitting = true;
        console.log('Quitting...');
        return conn.end();
    }
    conn.write(data);
});


const connect = () => {

    const reconnect = () => {
        if (retriedTimes >= MAX_RETRIES) {
            throw new Error('Max retires have been exceeded, I give up.');
        }
        retriedTimes += 1;
        setTimeout(connect, RETRY_TIMEOUT);
    };

    conn = net.createConnection(PORT);

    conn.on('connect', () => {
        retriedTimes = 0;
        console.log('Connected to the server.');
    });

    conn.on('error', (error) => {
        console.log('Error in connection:', error);
    });

    conn.on('close', () => {
        if (quitting) {
            return;
        }
        console.log('Connection got closed. Trying to reconnect...');
        reconnect();
    });

    process.stdin.pipe(conn);

    // We don't want our process standard output stream to close 
    // when source stream end so setting end flag as false.
    conn.pipe(process.stdout, { end: false });
};

connect();

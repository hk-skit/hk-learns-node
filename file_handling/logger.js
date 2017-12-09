const fs = require('fs');
const file = `${__dirname}/log.txt`;
const write = (message, cb = () => {}) => {
    fs.open(file, 'a', (err, fileDescriptor) => {
        if (err) {
            cb(err);
        }

        const buffer = new Buffer(`\n${message}`);
        const bufferOffset = 0;
        const filePosition = null;
        fs.write(fileDescriptor, buffer, bufferOffset, buffer.length, filePosition, (err, written) => {
            fs.close(fileDescriptor, () => cb(err));
        });
    });
};

module.exports = {
    write
};

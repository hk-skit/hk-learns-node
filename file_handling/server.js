const fs = require('fs');
const path = require('path');
const logger = require('./logger');
const normalised = path.normalize('/foo/bar//baz/asdf/quux/..');
const joined = path.join('/foo', 'oof', '/blah..', '/blah');
fs.stat(__filename, (error, stat) => {
    if (error) {
        throw error;
    }
    logger.write(JSON.stringify(stat, null, 4));
});


fs.open(`${__dirname}/dummy.json`, 'a+', (error, fileDescriptor) => {
    if (error) {
        throw error;
    }
    logger.write(`File Descriptor --> ${fileDescriptor}`);
});

logger.write(`$Normalised --> ${normalised}`);
logger.write(`Joines --> ${joined}`);

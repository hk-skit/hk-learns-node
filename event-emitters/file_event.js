const fs = require('fs');
const path = require('path');

console.log('__dirname --> ', __dirname);
console.log('__filename --> ', __filename);

fs.readFile(__filename, (err, fileBuffer) => {
    if (err) {
        throw err;
    }
    console.log('Filer content --> ', fileBuffer.toString());
});

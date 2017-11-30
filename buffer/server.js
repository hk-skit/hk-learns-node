const buffer = new Buffer('Hello World!!');

// Slicing buffer does not allocate new memory. It refernces existing parent buffer memory.
const helloBuffer = buffer.slice(0, 5);

// Buffer of 1kb.
const kbBuffer = new Buffer(1024);

console.log('buffer --> ', buffer);
console.log('helloBuffer --> ', helloBuffer.toString());
console.log('kbBuffer --> length ', kbBuffer.length);


// Copying buffer
const source = new Buffer('this is the content of my buffer.');
const target = new Buffer(11);

const targetStart = 0;
const sourceStart = 8;
const sourceEnd = 19;

source.copy(target, targetStart, sourceStart, sourceEnd);
console.log('target buffer --> ', target.toString());

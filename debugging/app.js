let a;
const init = (n = 0) => {
    a = n;
};

const increment = () => {
    a += 1;
};
init();
console.log('Value of a is ', a);
increment();
console.log('Value of a after incrementing is ', a);
// https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27

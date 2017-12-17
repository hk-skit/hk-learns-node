const numbers = (n) => {
    return new Array(n).fill(null).map((v, index) => index + 1);
};
module.exports = {
    numbers
};
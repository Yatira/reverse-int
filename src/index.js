module.exports = function reverse (n) {
    let numberStr = `${Math.abs(n)}`;
    let result = '';

    for (let i = 0; i < numberStr.length; i++) {
        let symbol = numberStr[i];
        result = symbol + result;
    }

    return +result;
}
module.exports = function reverse(n) {
    if (n < 0) {
        return Math.abs(n);
    } else {
        let a = [...String(n)].reverse().join('');
        let result = Number(a);
        return result;
    }
}


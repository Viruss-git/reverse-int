module.exports = function reverse(n) {
    if (n < 0) {
        let a = [...String(Math.abs(n))].reverse().join('');
        let result = Number(a);
        return result;
    } else {
        let a = [...String(n)].reverse().join('');
        let result = Number(a);
        return result;
    }
}


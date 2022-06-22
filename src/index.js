module.exports = function reverse(n) {
        let a = [...String(Math.abs(n))].reverse().join('');
        let result = Number(a);
        return result;
}


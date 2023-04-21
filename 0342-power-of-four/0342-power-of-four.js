/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n === 1) return true;
    if (n % 4 !== 0 || n <=0) return false;
    else return isPowerOfFour(Math.floor(n/4));
};
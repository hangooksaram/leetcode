/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let carry = 0;
  let result = '';

  let lenA = a.length - 1;
  let lenB = b.length - 1;

  for (; lenA >= 0 || lenB >= 0 || carry > 0; lenA--, lenB--) {
    let sum = (+a[lenA] || 0) + (+b[lenB] || 0) + carry;
    if (sum > 1) {
      sum = sum % 2;
      carry = 1;
    } else {
      carry = 0;
    }
    result = `${sum}${result}`;
  }
  return result;
};

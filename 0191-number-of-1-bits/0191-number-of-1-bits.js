/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  n.toString(2).split("").forEach((num, index)=> {
      if(num === "1") count++;
  })  
return count;
};
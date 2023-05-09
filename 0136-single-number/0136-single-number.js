/**
 * @param {number[]} nums
 * @return {number}
 */
const IS_DUPLICATED = "duplicated number";
var singleNumber = function(nums) {
    let obj = {};
    
    nums.forEach((num, index)=> {
      const stringfiedNum = num.toString();
      if(obj[stringfiedNum] === stringfiedNum){
        obj[stringfiedNum] = IS_DUPLICATED
      }
      if(obj[stringfiedNum] !== IS_DUPLICATED)
      obj[stringfiedNum] = stringfiedNum; 
    })
  return Object.keys(obj).find(key=> {
    return obj[key] !== IS_DUPLICATED
  })
};
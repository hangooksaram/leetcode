/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const isTargetInArray = nums.findIndex(num => num === target) !== -1 ;
    if(isTargetInArray){
        return nums.findIndex(num => num === target)
    }
    const newNums = [...nums];
    newNums.push(target);
    newNums.sort((a, b) => {
        return a - b
    })
    return newNums.findIndex(num => num === target);
};
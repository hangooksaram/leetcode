/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.forEach((item, index)=> {
        if(item === val){
            nums[index] = -1
        }
    })
    nums.sort((a,b)=> {
        return b-a
    })
    
    while(nums.find(item=> item === -1)){
        nums.pop();
    }
    
    return nums.length
};
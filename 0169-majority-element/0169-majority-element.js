/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {};
    let dp = [];
    nums.forEach(num=> {
        if(Object.keys(obj).includes(num.toString())){
            obj[num].push(num);
            dp[num] += 1;
        }
        else {
            obj[num] = [num];
            dp[num] = 1;
        }
    })
    let maxIndex;
    let max = 0;

    dp.forEach((item, index) => {
        if(item > max){
            max = item;
            maxIndex = index;
        }
    })

    return maxIndex;
};
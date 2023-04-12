/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length- m + 1)
    nums2.splice(n, nums2.length- n + 1)
    nums2.forEach(num=>{
        nums1.push(num)
    })
    nums1.sort((a,b)=> {
        return a-b
    })
    
    return nums1
};
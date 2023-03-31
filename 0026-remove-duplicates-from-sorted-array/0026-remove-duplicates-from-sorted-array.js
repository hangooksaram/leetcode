var removeDuplicates = function(nums) {
    const set = new Set(nums);
    let i = 0;
    set.forEach(num => {
      nums[i] = num
      i++
    })
    return set.size;
}
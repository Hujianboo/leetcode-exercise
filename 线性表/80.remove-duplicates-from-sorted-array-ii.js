/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 1;
    if(nums.length < 2) return nums.length;
    for(let i = 2; i < nums.length;i++){
        if(nums[index-1] !== nums[i]){
            nums[++index] = nums[i]
        }
    }
    return index + 1;
};
// @lc code=end


/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;
    if(nums.length === 0) return 0;
    for(let i = 0; i < nums.length;i++){
        if(nums[index] !== nums[i]){
            nums[++index] = nums[i];
        };
    };
    return index + 1;
};
// @lc code=end


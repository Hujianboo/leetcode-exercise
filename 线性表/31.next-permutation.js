/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length === 1) return nums;
    let i = nums.length - 2;
    let j = nums.length - 1;
    let k = nums.length - 1;
    while(i >= 0 && nums[i] > nums[j]){
        i--;j--;
    };
    if(i >= 0){
        while(nums[i] >= nums[k]){
            k--;
        }
        let temp = nums[i];
        nums[i] = nums[k];
        nums[k] = temp;
    };
    for(let a = j,b = nums.length - 1;a <= b;a++,b--){
        let temp =nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
};
// @lc code=end


/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0; let end = nums.length - 1;
    while(start <= end){
        let mid = start + Math.floor((end - start)/2);
        if(nums[mid] === target) return mid;
        if(nums[start] <=nums[mid]){
            if(target >= nums[start] && target < nums[mid]){
                end = mid - 1;
            }else {
                start = mid + 1;
            }
        }
        else if(nums[start] > nums[mid]){
            if(target > nums[mid] && target <= nums[end]){
                start = mid + 1;
            }else {
                end = mid - 1;
            }
        }
    }
    return -1;
};
console.log(search([4,5,6,1,2,3]));

// @lc code=end


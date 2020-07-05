/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let minGap = 999999;
    let res= 0;
    nums.sort((a,b) => a - b);
    if(nums.length === 3) return nums[0] + nums[1] + nums[2];
    for(let first = 0; first < nums.length - 2 ;first++){
        let second = first + 1;
        let third = nums.length - 1;
        while(second < third){
            let sum = nums[first] + nums[second] + nums[third];
            let gap = Math.abs(sum - target);
            if(gap < minGap){
                res= sum;
                minGap = gap
            }
            if(sum < target){
                second++;
            }else if(sum > target){
                third--;
            }else{
                return target;
            }
        }
    }
    return res;
};
console.log(threeSumClosest([0,1,1,1],3));

// @lc code=end


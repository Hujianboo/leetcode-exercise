/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    let res = [];
    nums.forEach((item,index) => {
        map.set(item,index);
    });
    nums.forEach((item,index) => {
        if(map.has(target - item) && map.get(target - item) !== index){
            res = [index,map.get(target - item)];
            return;
        }
    })
    return res;
};

// @lc code=end


/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = new Map(nums.map(item => [item,false]));
    let longest = 0;
    //时间复杂度要在O(n)以内,对nums中的每个元素审查扩展。
    nums.forEach(item => {
        if(map.get(item) === false){
            let length = 1;
            map.set(item,true)
            for(let i = item + 1;map.has(i) === true;i++){
                map.set(i,true);
                length++;
            }
            for(let i = item - 1;map.has(i) === true;i--){
                map.set(i,true);
                length++;
            }
            longest = Math.max(longest,length);
        }
    })
    return longest;
};
// @lc code=end


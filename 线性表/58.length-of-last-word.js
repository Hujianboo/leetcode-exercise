/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    if(arr.length === 0) return 0;
    for(let i = arr.length - 1; i >= 0;i--){
        let item = arr[i];
        if(item.length !== 0) return item.length;
    }
    return 0;
    // return item.length;
};
// @lc code=end


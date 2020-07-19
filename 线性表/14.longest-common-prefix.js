/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let item = strs[0];
    if(item === undefined) return '';
    if(strs.length === 1) return item;
    for(let i = 0 ; i < item.length;i++){
        for(let j = 1; j < strs.length;j++){
            if(strs[j][i] !== strs[0][i]) return item.substr(0,i);
        }
    };
    return item;
};
// @lc code=end


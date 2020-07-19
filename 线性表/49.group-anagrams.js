/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {};
    let res = [];
    for(let i = 0; i < strs.length;i++){
        if(!obj[strs[i].split('').sort().join('')]){
            obj[strs[i].split('').sort().join('')] = [strs[i]];
        }else{
            obj[strs[i].split('').sort().join('')].push(strs[i]);
        };
    };
    for(let i in obj){
        res.push(obj[i]);
    };
    return res;
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// @lc code=end


/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let s1 = s.replace(/\W/g,'').replace(/_/g,'').toLocaleLowerCase();
    let len = s1.length;
    for(let start = 0; start< len/2; start++){
        if(s1[start] !== s1[len - 1 - start]){
            return false;
        }
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
// @lc code=end


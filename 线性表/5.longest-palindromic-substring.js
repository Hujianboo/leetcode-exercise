/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    let arr = [];
    let maxLen = 0;
    let start = 0;
    for(let i = 0; i < len;i++){
        arr[i] = new Array(len);
        for(let j = 0; j < len;j++){
            arr[i][j] = false;
        };
    };
    for(let i = 0; i < len;i++){
        arr[i][i] = true;
    };
    for(let i = 0; i < len;i++){
        for(let j = 0; j < i;j++){
            arr[j][i] = (s[j] === s[i] &&(i - j < 2 || arr[j+1][i-1]));
            if(arr[j][i] && maxLen < i - j + 1){
                maxLen = i - j + 1;
                start = j;
            }
        };
    };
    return s.substr(start,maxLen);
};
console.log(longestPalindrome('babaab'));
// @lc code=end


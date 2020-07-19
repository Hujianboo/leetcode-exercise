/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = '1';
    for(let i = 0; i < n - 1;i++){
        result = iter(result);
    };
    return result;

};
var iter = function(s) {
    let num = 1;
    let res = '';
    for(let i = 0; i < s.length - 1;i++){
        if(s[i] === s[i+1]){
            num++;
        }else{
            res += num;
            res += s[i];
            num = 1;
        }
    };
    res += num ;//此处要加上最后一个子序列的描述
    res += s[s.length - 1];
    return res;
}
// @lc code=end


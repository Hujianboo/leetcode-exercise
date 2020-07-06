/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;
    let i = len - 1;
    let carry = 1;
    while(carry > 0 && i >= 0){
        let temp = digits[i] + carry;
        digits[i] = (temp)%10;
        carry = Math.floor((temp)/10);
        i--;
    };
    if(carry === 1) digits.unshift(1)
    return digits;
};
// @lc code=end


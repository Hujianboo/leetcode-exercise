/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res = "";
    let val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; //13个
    let str = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']; //对应也是 13个
    for(let i = 0 ;num > 0;i++){
        while(num >= val[i]){
            res = res + str[i]
            num = num - val[i];
        }
    };
    return res;
};
// @lc code=end


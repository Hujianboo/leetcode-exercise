/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var peidui = function (a,b){
     if(a === '(' && b === ')') return true;
     if(a === '{' && b === '}') return true;
     if(a ==='[' && b === ']') return true;
     return false;
}
var isValid = function(s) {
    let stack = [];

    for(let i = 0; i < s.length;i++){
        if(peidui(stack[stack.length  - 1 ],s[i])){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    };
    if(stack.length === 0) {
        return true;
    }else{
        return false;
    }
};
// @lc code=end


/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let newPath = path.split('/');
    let stack = [];
    let res = '';
    for(let i = 0; i < newPath.length;i++){
        if(newPath[i] !== '..'&&newPath[i] !== ''&&newPath[i] !== '.'){
            stack.push(newPath[i]);
        }else if(newPath[i] === '..'){
            stack.pop();
        }else{
            
        }
    };
    for(let i = 0; i < stack.length;i++){
        res = res + '/' + stack[i];
    };
    return res.length === 0? '/':res;
};
// @lc code=end


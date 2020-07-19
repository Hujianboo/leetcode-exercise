/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var matches = function(a ,b) {
    if(b === '.'){
        return true;
    };
    return a === b;
}
var isMatch = function(s, p) {
    let sLen = s.length;
    let pLen = p.length;
    let f = new Array(sLen);
    for(let i = 0; i < sLen+1;i++){
        f[i] = new Array(pLen+1);
        for(let j = 0; j < pLen+1;j++){
            f[i][j] = false;
        };
    };
    f[0][0] = true;
    for(let i = 1; i < pLen+1;i++){
        if(i === 1)f[0][i] = false;
        if(p[i - 1] === '*' && f[0][i - 2])f[0][i] = true;
    };
    for(let i = 1; i<= sLen;i++){
        for(let j = 1; j <= pLen;j++){
            if(p[j - 1] === '*'){
                if(matches(s[i-1],p[j-2])){
                    f[i][j] = (f[i][j-2] || f[i][j-1] || f[i-1][j])
                }else{
                    f[i][j] = f[i][j-2];
                }
            }else{
                if(matches(s[i-1],p[j-1])){
                    f[i][j] = f[i-1][j-1];
                }else{
                    f[i][j] = false;
                }
            }
        }
    };
    return f[sLen][pLen];
};
// @lc code=end


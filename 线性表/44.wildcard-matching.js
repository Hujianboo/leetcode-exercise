/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sLen = s.length;
    let pLen = p.length;
    let f = new Array(sLen + 1);
    for(let i = 0; i < sLen + 1;i++){
        f[i] = new Array[pLen + 1];
        for(let j = 0; j < pLen + 1;j++){
            f[i][j] = false;
        };
    };
    f[0][0] = true;
    for(let i = 1; i < pLen + 1;i++){
        if(p[i - 1] === '*'){
            f[0][i] = true;
        }else{
            break;
        };
    };
    for(let i = 0; i < sLen + 1;i++){
        for(let j = 1; j < pLen + 1;j++){
            if(p[j-1]==='?'){
                f[i][j] = f[i-1][j-1];
            }else if(p[j-1] === '*'){
                f[i][j] = f[i][j-1] || f[i-1][j];
            }else{
                if(s[i - 1] === p[j - 1]){
                    f[i][j] = f[i-1][j-1];
                }else{
                    f[i][j] = false;
                }
            }
        }
    };
    return f[sLen][pLen]
};
// @lc code=end


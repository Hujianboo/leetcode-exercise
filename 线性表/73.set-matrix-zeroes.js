/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = Array(matrix.length).fill(false);
    let col = Array(matrix[0].length).fill(false);
    for(let i = 0;i < row.length;i++){
        for(let j = 0;j < col.length;j++){
            if(matrix[i][j] === 0){
                row[i] = true;
                col[j] = true;
            }
        }
    };
    for(let i = 0; i < row.length;i++){
        if(row[i] === true){
            matrix[i].fill(0);
        }
    };
    for(let j = 0; j < col.length;j++){
        if(col[j] === true){
            for(let i = 0; i < row.length;i++){
                matrix[i][j] = 0;
            }
        }
    }
};
// @lc code=end


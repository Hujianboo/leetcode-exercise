/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = board.length;
    let col = board[0].length;
    //row
    for(let i = 0; i< row;i++){
        let map = new Map();
        for (let j = 0; j < col; j++) {
            const element = board[i][j];

            if(map.has(element)){
                return false;
            }else if(element === '.'){continue;}
            else{
                map.set(element,true);    
            }
        }
    }
    //col
    for(let i = 0; i< col;i++){
        let map = new Map();
        for (let j = 0; j < row; j++) {
            const element = board[j][i];
            if(map.has(element)){
                return false;
            }else if(element === '.'){continue;}
            else{
                map.set(element,true);    
            }
        }
    }
    //box
    for(let i = 0; i < 3;i++){
        for(let j = 0; j < 3;j++){
            let map = new Map();
            for(let a = i*3;a < i*3+3;a++){
                for(let b= j*3;b < j*3+3;b++){
                    const element = board[a][b];
                    if(map.has(element)){
                        return false;
                    }else if(element === '.'){continue;}
                    else{
                        map.set(element,true);    
                    }
                }
            }
        }
    };
    return true;
};
// @lc code=end


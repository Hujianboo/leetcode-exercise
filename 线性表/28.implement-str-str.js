/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     let haystackLen = haystack.length;
//     let needleLen = needle.length;
//     if(needleLen === 0) return 0;
//     for(let i = 0; i <= haystackLen - needleLen;i++){
//         if(haystack[i] === needle[0]){
//             for(let j = 0; j < needleLen;j++){
//                 if(haystack[i + j] !== needle[j]){
//                     break;
//                 };
//                 if(haystack[i + j] === needle[j] && j === needleLen - 1){
//                     return i;
//                 }
//             }
//         }
//     };
//     return -1;
// };
// console.log(strStr('hello','ll'));

var charToInt = function (c){
    return c.charCodeAt() - 'a'.charCodeAt()
}
var strStr = function (haystack, needle) {
    let base = 26;
    let haystackLen = haystack.length;
    let needleLen = needle.length;
    let refH = 0,h = 0;
    let baseH = Math.pow(base,needleLen - 1);
    if(needleLen === 0) return 0;
    if(haystackLen < needleLen) return -1;
    for(let i = 0; i < needleLen;i++){
        h = h * base + charToInt(haystack[i]);
        refH = refH * base + charToInt(needle[i]);
    };
    if(h === refH) return 0;
    for(let i = 1; i <= haystackLen - needleLen;i++){
        h = (h - charToInt(haystack[i - 1])*baseH) * base + charToInt(haystack[i + needleLen - 1]);
        if(h === refH) return i;
    };
    return -1;
}
// console.log(strStr('hello','ll'));
// @lc code=end


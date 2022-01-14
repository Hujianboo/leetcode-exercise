/*
 * @Author: Hujianbo
 * @Date: 2022-01-13 23:32:22
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-14 13:40:33
 * @FilePath: /leetcode/线性表/47.PermutationsII.js
 */
// var permuteUnique = function(nums) {
//   let res = [];
//   nums = nums.sort((a,b) => a - b)
//   let used = Array(nums.length).fill(false);
//   const dfs = (arr) => {
//     //数量满了就不继续了
//     if(arr.length === nums.length){
//       res.push(arr)
//       return;
//     }
//     for(let i = 0 ; i < nums.length ; i++){
//       if(used[i]){
//         continue;
//       }
//       if(used[i-1] === false && nums[i] === nums[i-1]) continue;
//       used[i] = true;
//       arr.push(nums[i]);
//       dfs(arr.slice());
//       used[i] = false;
//       arr.pop();
//     }
//   }
//   dfs([])
//   return res;
// };
function permuteUnique(nums) {
  let res = []
  let perm = []
  let map = {}
  for (const num of nums) {
      map[num] = map[num] ? map[num]+1 : 1
  }
  
  function dfs() {
      if (perm.length == nums.length) {
          res.push(perm.slice())
          return
      }
      
      for (const n in map) {
          if (map[n] > 0) {
              perm.push(n)
              map[n] -= 1
              
              dfs()
              
              map[n] += 1
              perm.pop()
          }
      }
  }
  dfs()
  return res
};
let test = [1,1,3]
console.log(permuteUnique(test))
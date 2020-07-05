/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    let res = []
    for(let i = 0; i < nums.length - 2 ;i++){
        if(nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum === 0){
                res.push([nums[i],nums[j],nums[k]]);
                do{
                    --k;++j;
                }while(nums[k] === nums[k+1] && nums[j] === nums[j-1]&&j < k)
            }else if(sum > 0){
                k--;
                while(nums[k] === nums[k+1] && j < k) k--;
            }else{
                j++;
                while(nums[j] === nums[j-1] && j < k) j++;
            }
        }
    };
    return res;
};
console.log(threeSum([-1,0,1,2,-1,4]));

// @lc code=end


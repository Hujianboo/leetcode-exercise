function fn(nums){
    //先副对角线对换
    let len = nums.length;
    for(let i = 0 ; i < len;i++){
        for(let j = 0; j < len - i;j++){
            let temp = nums[i][j];
            nums[i][j] = nums[len - 1 -j][len - 1 -i];
            nums[len - 1 -j][len - 1 -i] = temp;
        }
    }
    //上下排互换
    for(let i =0; i < len/2;i++){
        let temp= nums[i];
        nums[i] = nums[len - 1 - i];
        nums[len - 1 - i] = temp;
    }
    // console.log(nums);
    
    return nums;
}
console.log(fn([[1,2,3],[4,5,6],[7,8,9]]));
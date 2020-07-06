var trap = function(height) {
    //从左往右
    let leftToRight = [];
    let rightToLeft = [];
    let res = 0;
    for(let i  = 0; i < height.length;i++){
        let j = i + 1;
        let max = height[i];
        while(j < height.length){
            max = Math.max(max,height[j])
            j++;
        };
        leftToRight[i] = max;
    };
    //从右往左
    for(let i = height.length - 1; i >= 0; i--){
        let j = i -1;
        let max = height[i];
        while(j >= 0){
            max = Math.max(max,height[j]);
            j--;
        };
        rightToLeft[i] = max;
    }
    //
    for(let i  = 0; i< leftToRight.length;i++){
        res += Math.min(leftToRight[i],rightToLeft[i]) - height[i]
    }
    return res;    
};

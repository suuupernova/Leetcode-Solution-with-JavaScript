var singleNumber = function(nums) {
    let ans=0
    for(num of nums){
        ans^=num;
    }
    return ans;

};

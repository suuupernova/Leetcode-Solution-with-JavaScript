var threeSum = function(nums) {
    if(nums.length<3){
        return [];
    }
    nums.sort((a,b)=>a-b);
    let res=[];
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]==nums[i-1]) continue;
        let left=i+1,right=nums.length-1;
        let target=-nums[i];
        while(left<right){
            let sum=nums[left]+nums[right];
            if(sum==target){
                res.push([nums[i],nums[left],nums[right]]);
                while(nums[left]==nums[++left]);
                while(nums[right]==nums[--right]);
            }
            else if(sum>target){
                right--
            }
            else{
                left++;
            }
        }
    }
    return res;
};

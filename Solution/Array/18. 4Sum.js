//比三数之和多一层循环
var fourSum = function(nums, target) {
    let len=nums.length;
    if(len<4){
        return [];
    }
    nums.sort((a,b)=>a-b);
    let res=[];
    for(let i=0;i<len-3;i++){
        if(i>0&&nums[i]==nums[i-1]) continue;
        
        for(let j=i+1;j<len-2;j++){
            if(j>i+1&&nums[j]==nums[j-1]) continue;
            const tar=target-nums[i]-nums[j];
            let left=j+1,right=len-1;
            while(left<right){
                const sum=nums[left]+nums[right];
                if(sum==tar){
                    res.push([nums[i],nums[j],nums[left],nums[right]]);
                    while (left < right && nums[left] == nums[++left]);
                    while (left < right && nums[right] == nums[--right]);
                    //right--;
                    //left++;
                }
                else if(sum>tar){
                    right--;
                }
                else{
                    left++;
                }
            }
        }
    }
    return res;
    

};

var sortColors = function(nums) {
    let size=nums.length;
    if(size<2){
        return;
    }
    let zero=0;
    let two=size;
    let i=0;
    while(i<two){
        if(nums[i]==0){
            [nums[zero],nums[i]]=[nums[i],nums[zero]];
            zero++;
            i++;
        }
        else if(nums[i]==1){
            i++;
        }else{
            two--;
            [nums[two],nums[i]]=[nums[i],nums[two]];
        }
    }

};

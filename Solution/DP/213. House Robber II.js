var rob = function(nums) {
    let len=nums.length;
    if(len==0){
        return len;
    }else if(len===1){
        return nums[0];
    }else if(len===2){
        return Math.max(nums[0],nums[1]);
    }
    return Math.max(helper(nums,0,len-2),helper(nums,1,len-1));
    
    
    
    function helper(nums,start,end){
        let first=nums[start],second=Math.max(nums[start],nums[start+1]);
        
        for(let i=start+2;i<=end;i++){
            const tmp=second;
            second=Math.max(first+nums[i],tmp);
            first=tmp;
        }
        return second;
    }


};

var longestConsecutive = function(nums) {
    let len=nums.length;
    let maxLen=0;
    if(len<2){
        return len;
    }
    let set=new Set(nums);
    for(let num of nums){
        if(!set.has(num-1)){
            let start=num;
            let curlen=1;
            while(set.has(++start)){
                curlen++;
            }
            maxLen=Math.max(maxLen,curlen);
        }
    }
    return maxLen;
};

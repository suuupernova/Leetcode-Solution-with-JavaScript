/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length<=1){
        return nums;
    }
    let pivotIndex=Math.ceil(nums.length/2);
    let pivot=nums.splice(pivotIndex,1);
    let left=[];
    let right=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]<pivot){
            left.push(nums[i]);
        }
        else{
            right.push(nums[i]);
        }
    }
    return sortArray(left).concat(pivot,sortArray(right));

};

    //bubble sort
var sortArray = function(nums) {

    if(nums.length<=1){
        return nums;
    }
    let flag=1;
    
    let len=nums.length;
    for(let i=0;i<len&&flag;i++){
        flag=0;
        for(let j=len-1;j>i;j--){
            if(nums[j]<nums[j-1]){
                [nums[j],nums[j-1]]=[nums[j-1],nums[j]];
                flag=1;
            }

        }
    }
    return nums;

};

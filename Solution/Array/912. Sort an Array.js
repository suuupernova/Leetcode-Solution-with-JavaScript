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


 //selection sort
var sortArray = function(nums) {
   
    for(let i = 0,len = nums.length;i<len;i++) {
        for (let j = i+1;j<len;j++) {
             // 将nums[i]与后面的元素比较，一直维持num[i]最小
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    return nums

};

//insert sort
var sortArray = function(nums) {

    for(let i=1;i<nums.length;i++){
        const tmp=nums[i];
        let j=i;
        while(j>0&&tmp<nums[j-1]){
            nums[j]=nums[j-1];
            j--;
        }
        nums[j]=tmp;
    }
    return nums;
};

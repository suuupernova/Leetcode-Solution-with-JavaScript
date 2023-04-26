var search = function(nums, target) {
    if(!nums.length)return -1;
    let left=0,right=nums.length-1,mid;
    while(left<=right){
        mid=left+((right-left)>>1);
        if(nums[mid]===target){
            return mid;
        }
        if(nums[mid]>=nums[left]){
            if(target>=nums[left]&&target<nums[mid]){
                right=mid-1;
            }else{
                left=mid+1;
            }
        }else{
            if(target>nums[mid]&&target<=nums[right]){
                left=mid+1;
            }else{
                right=mid-1;
            }
        }
    }
    return -1;

};

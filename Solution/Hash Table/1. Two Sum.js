var twoSum = function(nums, target) {
    let myMap=new Map();
    for(let i=0;i<nums.length;i++){
        if(myMap.has(target-nums[i])){
            return [i,myMap.get(target-nums[i])];
        }
        else{
            myMap.set(nums[i],i)
        }
    }
    return null;

};

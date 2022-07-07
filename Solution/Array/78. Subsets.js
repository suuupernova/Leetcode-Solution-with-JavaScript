var subsets = function(nums) {
    let res=[],arr=[];
    function find(start){
        res.push([...arr]);
        for(let i=start;i<nums.length;i++){
            arr.push(nums[i]);
            find(i+1);
            arr.pop();
        }
    }
    find(0);
    return res;

};

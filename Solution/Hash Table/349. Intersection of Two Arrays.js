var intersection = function(nums1, nums2) {
    let a=new Set(nums1);
    let b=new Set(nums2);
    let intersect =new Set([...a].filter(x=>b.has(x)));
    return intersect = [...intersect];

};

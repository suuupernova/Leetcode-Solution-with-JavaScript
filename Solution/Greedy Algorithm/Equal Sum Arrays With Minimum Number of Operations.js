var minOperations = function(nums1, nums2) {
    if(6*nums1.length<nums2.length||6*nums2.length<nums1.length){
        return -1;
    }
    const cnt1=new Array(7).fill(0);
    const cnt2=new Array(7).fill(0);
    let diff=0;
    for(const i of nums1){
        ++cnt1[i];
        diff+=i;
    }
    for(const i of nums2){
        ++cnt2[i];
        diff-=i;
    }
    if(diff===0)return 0;
    if(diff>0){
        return help(cnt2,cnt1,diff);
    }
    return help(cnt1,cnt2,-diff);
    function help(h1,h2,diff){
        const h=new Array(7).fill(0);//h[i]是可以获得的值为i的变化量的个数，也就是有h[i]个数可以使 diff 减少 i
        for(let i=1;i<7;++i){
            h[6-i]+=h1[i];
            h[i-1]+=h2[i];
        }
        let res=0;
        /*
        那么从大到小枚举 i=5,4,3,2,1
        如果 d>i⋅h[i]，那么应该把这 h[i] 个数的变化量拉满，并更新   d 为 d−i⋅cnt[i]；
        否则，可以通过修改其中的    [d/i] 个数，使 d 恰好为 0，退出循环。
        累加需要修改的数的个数，即为答案。如果无法使 d=0，返回 −1。
        */
        for(let i=5;i>0&&diff>0;--i){
            if(i*h[i]>=diff){
                return res+Math.ceil((diff)/i);
            }
            res+=h[i];
            diff-=i*h[i];
        }
        return res;
    }
    
};

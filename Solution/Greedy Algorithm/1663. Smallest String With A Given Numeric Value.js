var getSmallestString = function(n, k) {
    let res='';
    let diff=k-n;
    let tmp=0;
    for(let i=n-1;i>=0;i--,diff-=tmp){
        tmp=Math.min(25,diff);
        res=String.fromCharCode(97+tmp)+res;
    };
    return res;
};

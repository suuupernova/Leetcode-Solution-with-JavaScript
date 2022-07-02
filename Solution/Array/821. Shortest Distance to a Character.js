//1.双指针
var shortestToChar = function(s, c) {
    if(!s.length){
        return [];
    }
    let answer=Array(s.length).fill(0);
    for(let i=0;i<s.length;i++){
        if(s[i]==c)continue;
        let l=i,r=i,shortest=Infinity;
        while(l>=0){
            if(s[l]===c){
                shortest=Math.min(shortest,i-l);
                break;
            }
            l--;
        }
        while(r<s.length){
            if(s[r]===c){
                shortest=Math.min(shortest,r-i);
                break;
            }
            r++;
        }
        answer[i]=shortest;
    }
    return answer;

};
//2.时间换空间
var shortestToChar = function(s, c) {
    let record=[];
    for(let i=0;i<s.length;i++){
        if(s[i]===c)record.push(i);
    }
    let res=Array(s.length).fill(Infinity);
    for(let i=0;i<s.length;i++){
        if(s[i]===c){
            res[i]=0;
            continue;
        }
        for(const index of record){
            const dist=Math.abs(index-i);
            if(dist>=res[i])break;
            res[i]=dist;
        }
    }
    return res;

};

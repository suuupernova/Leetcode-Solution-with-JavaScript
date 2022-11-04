var findAnagrams = function(s, p) {
    let len1=s.length;
    let len2=p.length;
    let ans=[];
    let vp=new Array(26).fill(0);
    let vs=new Array(26).fill(0);
    for(let c of p){
        ++vp[c.charCodeAt()-'a'.charCodeAt()];
    }
    for(let i=0;i<len1;i++){
        if(i>=len2){
            --vs[s[i-len2].charCodeAt()-'a'.charCodeAt()];
        }
        ++vs[s[i].charCodeAt()-'a'.charCodeAt()];
        // console.log(vp,vs);
        if(vs.toString()==vp.toString()){
            ans.push(i+1-len2);
        }
    }
    return ans;
    
};

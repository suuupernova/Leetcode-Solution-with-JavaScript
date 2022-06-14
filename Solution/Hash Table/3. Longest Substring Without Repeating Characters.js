var lengthOfLongestSubstring = function(s) {
    if(s.length<=1){
        return s.length;
    }
    let mySet=new Set();
    let pos=0,maxLen=0;
    for(let i=0;i<s.length;i++){
        if(!mySet.has(s[i])){
            mySet.add(s[i]);
            maxLen=Math.max(maxLen,mySet.size);
        }
        else{
            while(mySet.has(s[i])){
                mySet.delete(s[pos]);
                pos++;
            }
            mySet.add(s[i]);
            
        }
    }
    return maxLen;
};

//双指针
var longestPalindrome = function(s) {
    let res="";
    for(let i=0;i<s.length;i++){
        helper(i,i,s);
        helper(i,i+1,s);
    }
    function helper(l,r,s){
        while(l>=0&&r<s.length&&s[l]===s[r]){
            l--;
            r++;
        }
        const maxStr=s.slice(l+1,r);
        if(maxStr.length>res.length){
            res=maxStr;
        }
    }
    return res;
};

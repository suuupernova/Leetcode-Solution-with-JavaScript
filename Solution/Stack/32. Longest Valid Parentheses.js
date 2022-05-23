//此题求连续括号的长度
//配对的题考虑使用栈
var longestValidParentheses = function(s) {
    //初始化第一个数为-1是考虑到括号从头到尾都可匹配的情况
    let bracket=[-1];
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            //记录前括号位置
            bracket.push(i);
        }
        else{
            bracket.pop();
            if(bracket.length==0){
                bracket.push(i);
            }else{
                count=Math.max(count,i-bracket[bracket.length-1]);
            }
        }
    }
    return count;

};

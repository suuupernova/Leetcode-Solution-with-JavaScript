//第一次自己写的版本。
//思路就是很简单的利用栈来解题，前括号依次入栈，遇到后括号，判断栈顶是不是对应的前括号，如果是就出栈，
//如果不是就返回false。循环完成后再判断栈内是否还有元素，没有返回true，有返回false。
//看了题解发现可以用数学排除一些答案，比如如果括号数不是偶数，那必然应该返回false，加上这条判断瞬间击败了更多人。

var isValid = function(s) {
    let len=s.length;
    if(len%2!=0) return false;
    let bracket=[];
    for(let i=0;i<len;i++){
        if(s[i]=='('||s[i]=='['||s[i]=='{'){
            bracket.push(s[i]);
        }
        else{
            if(!bracket.length) return false;
            let topValue=bracket[bracket.length-1];
            if(s[i]==')'&&topValue!='(')return false;           
            if(s[i]==']'&&topValue!='[')return false;
            if(s[i]=='}'&&topValue!='{')return false;
            bracket.pop();
        }
    }
    return !bracket.length;

};

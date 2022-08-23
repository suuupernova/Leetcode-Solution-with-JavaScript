//单调栈
var removeDuplicateLetters = function(s) {
    let monoStack=[];
    for(let i=0;i<s.length;i++){
        if(monoStack.indexOf(s[i])!=-1) continue;
        while(monoStack.length>0&&monoStack[monoStack.length-1]>s[i]&&s.indexOf(monoStack[monoStack.length-1],i)!=-1){
            monoStack.pop();
        }
        monoStack.push(s[i]);
    }
    return monoStack.join('');
    
};

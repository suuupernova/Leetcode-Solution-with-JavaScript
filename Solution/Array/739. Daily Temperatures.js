//暴力法
var dailyTemperatures = function(temperatures) {
    let len=temperatures.length;
    let answer=new Array(len).fill(0);
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(temperatures[j]>temperatures[i]){
                answer[i]=j-i;
                break;
            }
        }
    }
    return answer;

};
//单调栈
var dailyTemperatures = function(temperatures) {
    let myStack=[];
    let answer=new Array(temperatures.length).fill(0);
    let len=temperatures.length;
    for(let i=0;i<len;i++){
        let tmp=temperatures[i];
        while(!!myStack.length&&temperatures[myStack[myStack.length-1]]<tmp){
            let index=myStack.pop();
            answer[index]=i-index;
        }
        myStack.push(i);
    }
    return answer;
    

};

//最基础的解法
var maxProfitAssignment = function(difficulty, profit, worker) {
    let res=0;
    worker.sort((a,b)=>a-b);
    for(let i=0;i<worker.length;i++){
      let tmp=0;
      for(let j=0;j<difficulty.length;j++){
        if(worker[i]>=difficulty[j]){
          tmp=Math.max(profit[j],tmp);
        }
      }
      res+=tmp;
    }
    return res;
};

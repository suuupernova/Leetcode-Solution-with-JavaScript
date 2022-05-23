//刚开始没理解题意，最后明白了是返回每一层最后一个数
//广度优先算法，考虑使用队列
var rightSideView = function(root) {
    if(!root){
        return [];
    }
    let res=[];
    //使用该队列存入一层的元素
    const queue =[root];
    while(queue.length){
        let len=queue.length;
        let bfs=[];
        for(let i=0;i<len;i++){
            let tmp=queue.shift();
        
            bfs.push(tmp.val);
            if(tmp.left){
                queue.push(tmp.left);
            }
            if(tmp.right){
                queue.push(tmp.right);
            }
        }
        //push该层最后一个元素
        res.push(bfs[bfs.length-1]);
       

    }
    return res;

};

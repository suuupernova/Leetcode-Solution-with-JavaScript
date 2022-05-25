//和二叉树的层序遍历十分类似
//同样是需要队列辅助完成
//只需要一个标记来确定该层是否需要反转即可
var zigzagLevelOrder = function(root) {
    if(!root){
        return [];
    }
    let res=[];
    let queue=[root];
    //标记
    let flag=false;
    while(queue.length){
        let len=queue.length;
        res.push([]);
        while(len--){
            const node=queue.shift();
            res[res.length-1].push(node.val)
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
        flag&&res[res.length-1].reverse();
        flag=!flag;
    }
    return res;
};

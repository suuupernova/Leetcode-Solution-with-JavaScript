var longestUnivaluePath = function(root) {
    let res=0;
    function helper(node){
        if(!node){
            return 0;
        }
        let leftRes=helper(node.left);
        let rightRes=helper(node.right);
        let left=node.left&&node.left.val==node.val?leftRes+1:0;
        let right=node.right&&node.right.val==node.val?rightRes+1:0;
        res=Math.max(res,left+right);
        return Math.max(left,right);
    }
    helper(root);
    return res;

};

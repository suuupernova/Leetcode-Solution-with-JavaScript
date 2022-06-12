var diameterOfBinaryTree = function(root) {
    let ans=0;
    function helper(node){
        if(!node){
            return 0;
        }
        let left=helper(node.left);
        let right=helper(node.right);
        ans=Math.max(ans,left+right);
        return Math.max(left,right)+1;

    }
    helper(root);
    return ans;

};

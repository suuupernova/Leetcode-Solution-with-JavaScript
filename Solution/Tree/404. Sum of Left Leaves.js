var sumOfLeftLeaves = function(root) {
    if(!root){
        return 0;
    }
    if(isLeaf(root.left)){
        return root.left.val+sumOfLeftLeaves(root.right);
    }
    return sumOfLeftLeaves(root.left)+sumOfLeftLeaves(root.right);

    
    function isLeaf(node){
        if(!node){
            return false;
        }
        if(!node.left&&!node.right){
            return true;
        }
        return false;
    }

};

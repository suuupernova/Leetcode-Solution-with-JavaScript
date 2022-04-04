var isSubtree = function(root, subRoot) {
    if(root==null)
    {
        return subRoot==null;

    }
    function helper(node,subRoot){
        
        if(!node||!subRoot){
            return node==subRoot;
        }
        return (node.val==subRoot.val)&&helper(node.left,subRoot.left)&&helper(node.right,subRoot.right);

    }
    if(helper(root,subRoot))return true;
    return isSubtree(root.left,subRoot)||isSubtree(root.right,subRoot);

};

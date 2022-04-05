var isSymmetric = function(root) {
    if(!root)
    {
        return true;
    }
    function helper(node1,node2)
    {
        if(!node1||!node2)
        {
            return node1==node2;
        }
        return (node1.val==node2.val)&&helper(node1.left,node2.right)&&helper(node1.right,node2.left)
    }
    return helper(root.left,root.right);
};

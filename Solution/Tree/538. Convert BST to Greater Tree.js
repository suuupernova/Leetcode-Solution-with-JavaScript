//逆中序遍历
var convertBST = function(root) {
    let sum=0;
    function helper(node){
        if(node===null)return 0;
        helper(node.right);
        sum+=node.val;
        node.val=sum;
        helper(node.left);
    }
    helper(root);
    return root;

};

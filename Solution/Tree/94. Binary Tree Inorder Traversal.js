//中序遍历，考虑使用栈
var inorderTraversal = function(root) {    
    let res=[];  
    function inorder(node){
        if(!node){
        return null;
        }
        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    return res;
};

var constructMaximumBinaryTree = function(nums) {
    if(!nums.length){
        return null;
       

    }
     let max=Math.max.apply(null,nums);
     let root=new TreeNode(max);
     let index=nums.findIndex((value)=>value===max);
     root.left=constructMaximumBinaryTree(nums.slice(0,index));
     root.right=constructMaximumBinaryTree(nums.slice(index+1,nums.length));
     return root;

};

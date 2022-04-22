var minDepth = function(root) {
    if(!root){
        return 0;
    }
    let left=minDepth(root.left);
    let right=minDepth(root.right);
    if(left==0||right==0){
        return left+right+1;
    }
    
    return Math.min(left,right)+1;

};

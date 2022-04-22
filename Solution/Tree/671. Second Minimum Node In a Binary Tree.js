var findSecondMinimumValue = function(root) {
    let res=-1;
    function dfs(root,value){
        if(!root){
            return;
        }
        if(root.val!=value){
            if(res==-1){
                res=root.val;
            }
            else{
                res=Math.min(res,root.val);
            }
            return;
        }
        dfs(root.left,value);
        dfs(root.right,value);
    }
    dfs(root,root.val);
    return res;

};

//二分法
var searchMatrix = function(matrix, target) {
    let m=matrix.length,n=matrix[0].length;
    let l=0,r=m*n-1;
    while(l<=r){
        let mid=Math.floor(l+(r-l)/2);
      //重点
        const num=matrix[Math.floor(mid/n)][mid%n];
        if(num===target){
            return true;
        }
        else if(num>target){
            r=mid-1;
        }
        else{
            l=mid+1;
        }

    }
    return false;

};

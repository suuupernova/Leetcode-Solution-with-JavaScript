//1.二分法找右边界
//2.因为x的平方根在肯定在范围[0, x]之间，即需要不断去缩小[left, right]这个范围，找到准确的值
//3.通过循环去比较二分取值mid的平方和x的大小，若mid的平方小，则左边界右移；若mid的平方大，则右边界左移
//4.直到left > right结束循环，返回right即可。

var mySqrt = function(x) {
    let left=0;
    let right=x;
    while(left<=right){
        let mid=left+((right-left)>>1);
        if(mid*mid<=x){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    return right;


};

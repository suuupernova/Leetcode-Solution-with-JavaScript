//js的右移我是真的整不明白。。乖乖用除法了
var findMedianSortedArrays = function(nums1, nums2) {
    const len1=nums1.length;
    const len2=nums2.length;
    const mid=(len1+len2+1)>>1;
    //console.log(mid);
    if((len1+len2)%2){
        return getK(nums1,nums2,0,0,mid);
     }
    else{
        let left=getK(nums1,nums2,0,0,mid);
        let right=getK(nums1,nums2,0,0,mid+1);
        return (left+right)/2;
    }
    function getK(nums1,nums2,i,j,k){
       
       const len1=nums1.length;
       const len2=nums2.length;
       if(nums1.length-i>nums2.length-j)return getK(nums2,nums1,j,i,k);
       if(len1===i)return nums2[j+k-1];
    //    if(len2===j)return nums1[i+k-1];
       if(k===1)return Math.min(nums1[i],nums2[j]);
    //这里两个居然是等效的，我实在搞不明白，先闲置一下
    //    const idx1=i+Math.min(len1,k>>1)-1;
    //    const idx2=j+Math.min(len2,k>>1)-1;
       const idx1=Math.min(len1-1,i+Math.floor(k/2)-1);
       const idx2=Math.min(len2-1,j+Math.ceil(k/2)-1);
       console.log(idx2,idx1);
       if(nums1[idx1]>nums2[idx2]){ 
           return getK(nums1,nums2,i,idx2+1,k-(idx2-j+1));
       }else{
           return getK(nums1,nums2,idx1+1,j,k-(idx1-i+1));
       }
    }

};

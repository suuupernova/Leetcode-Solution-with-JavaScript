//此题可以使用动态规划
//创建一个数组，存入包含当前节点的最大和
//同时用一个变量存入过往所有的最大和中的最大和

var maxSubArray = function(nums) {
    let maxSum=nums[0];
    let dp=[];
    dp[0]=nums[0];
    for(let i=1;i<nums.length;i++){
        dp[i]=Math.max(dp[i-1]+nums[i],nums[i]);
        maxSum=Math.max(maxSum,dp[i])
    }
    return maxSum;


};

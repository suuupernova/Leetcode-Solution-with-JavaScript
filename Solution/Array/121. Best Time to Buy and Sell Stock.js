var maxProfit = function(prices) {
    if(prices.length<2) return 0;
    let min=prices[0];
    let maxPro=0;
    for(let i=1;i<prices.length;i++){
        min=Math.min(min,prices[i]);
        maxPro=Math.max(maxPro,prices[i]-min);
    }
    return maxPro;

};

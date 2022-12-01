var nearestValidPoint = function(x, y, points) {
    let ans=-1,mi=1000000;
    for(let i=0;i<points.length;i++){
        let a=points[i][0],b=points[i][1];
        if(a===x||b===y){
            let d=Math.abs(a-x)+Math.abs(b-y);
            if(d<mi){
                mi=d;
                ans=i;
            }
        }
    }
    return ans;

};

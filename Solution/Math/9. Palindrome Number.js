var isPalindrome = function(x) {
    let str=x.toString();
    let arr=str.split('');
    let i=0,j=arr.length-1;
    while(i<=j){
        if(arr[i]===arr[j]){
            i++;
            j--;              
            if(i===j){
                break;
            }              
            continue;
        }
        else{              
            return false;                
        }
    }
    return true;
};

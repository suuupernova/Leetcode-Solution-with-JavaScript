/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map=new Map();
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+s[i]);
        }
        else{
            map.set(s[i],s[i]);
        }
    }

    return Array.from(map.values()).sort((a,b)=>b.length-a.length).join('');
    

};

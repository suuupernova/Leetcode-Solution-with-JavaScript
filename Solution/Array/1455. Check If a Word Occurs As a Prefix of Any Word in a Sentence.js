//利用了一些js的api
var isPrefixOfWord = function(sentence, searchWord) {
    let arr=sentence.split(" ");
    for(let i=0;i<arr.length;i++){
        if(arr[i].indexOf(searchWord)===0){
            return i+1;
        }
    }
    return -1;

};

//双指针
var isPrefixOfWord = function(sentence, searchWord) {
    let len=sentence.length;
    let index=1,start=0,end=0;
    while(start<len){
        while(end<len&&sentence[end]!=" "){
            end++;
        }
        if(isPrefix(sentence,start,end,searchWord)){
            return index;
        }
        index++;
        end++;
        start=end;
    }
    return -1;
    function isPrefix(content,start,end,search){
        for(let i=0;i<search.length;i++){
            if(content[start+i]!=search[i]){
                return false;
            }
        }
        return true;
        
    }

};

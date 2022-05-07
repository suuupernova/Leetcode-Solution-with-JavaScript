//解法1：快慢指针
//if there is a circle in the linked list, the 2 pointers will meet
var hasCycle = function(head) {
    let fast=slow=head;
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            return true;
        }
    }
    return false;
    
};

//解法2：利用数组判断(极度不推荐)
var hasCycle = function(head) {
    let res=[];
    while(head){
        if(res.includes(head)){
            return true;
        }
        res.push(head);
        head=head.next;
    }
    return false;
    
};

//解法3
var hasCycle = function(head) {
    while(head){
        if(head.flag){
            return true;
        }
        head.flag=true;
        head=head.next;
    }
    return false;
    
};

//解法4
//利用JavaScript语言特性
var hasCycle = function(head) {
    try{
        JSON.stringify(head);
        return false;
    }
    catch{
        return true;
    }
    
};

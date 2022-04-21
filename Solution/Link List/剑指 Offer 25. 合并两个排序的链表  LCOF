var mergeTwoLists = function(l1, l2) {
    let res=new ListNode(-1);
    let curNode=res;
    while(l1&&l2){
        if(l1.val<l2.val){
            curNode.next=l1;
            l1=l1.next;
        }
        else{
            curNode.next=l2;
            l2=l2.next;
        }
        curNode=curNode.next;
    }
    curNode.next=l1||l2;
    return res.next;

};

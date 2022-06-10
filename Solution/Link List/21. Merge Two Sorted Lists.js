var mergeTwoLists = function(list1, list2) {
    let res=new ListNode(-1);
    let cur=res;
    while(list1&&list2){
        if(list1.val>list2.val){
            cur.next=list2;
            list2=list2.next;
        }
        else{
            cur.next=list1;
            list1=list1.next;
        }
        cur=cur.next;
    }
    list1?cur.next=list1:cur.next=list2;
    return res.next;


};

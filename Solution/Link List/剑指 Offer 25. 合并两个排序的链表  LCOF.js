//1.迭代
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
//2.递归
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

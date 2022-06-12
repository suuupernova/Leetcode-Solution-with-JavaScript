var addTwoNumbers = function(l1, l2) {
    let p1=l1;
    let p2=l2;
    let flag=0;
    let dummy = new ListNode(-1);
    let p=dummy;
    while(p1||p2||flag){
        let num1=p1?p1.val:0;
        let num2=p2?p2.val:0;
        let sum=num1+num2+flag;
        if(sum>9){
            p.next=new ListNode(sum%10)
            flag=1;
        }
        else{
            p.next=new ListNode(sum);
            flag=0;
        }
        if(p1){
            p1=p1.next;
        }
        if(p2){
            p2=p2.next;
        }
        p=p.next;
    }
    return dummy.next;

};

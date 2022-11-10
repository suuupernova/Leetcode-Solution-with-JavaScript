var deleteNode = function(head, val) {
    if(head.val===val)return head.next;
    let cur=head;
    while(cur.next){
        if(cur.next.val===val){
            cur.next=cur.next.next;
            return head;
        }
        cur=cur.next;
    }

};

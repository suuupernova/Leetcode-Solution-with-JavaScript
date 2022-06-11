var getKthFromEnd = function(head, k) {
    let slow=head,fast=head;
    let flag=0;
    while(fast){
        if(flag>=k){
            slow=slow.next;
        }
        fast=fast.next;
        flag++;

    }
    return slow;

};

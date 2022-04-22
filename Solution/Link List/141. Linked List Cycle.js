//use fast and slow pointer
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

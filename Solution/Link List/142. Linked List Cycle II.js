var detectCycle = function(head) {
    let fast=head,slow=head,firstMet=null;
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast){
            firstMet=fast;
            break;
        }
    }
    if(!firstMet)return null;
    fast=head;
    while(firstMet&&fast){
        if(firstMet===fast){
            return fast;
        }
        firstMet=firstMet.next;
        fast=fast.next;
    }

    
};

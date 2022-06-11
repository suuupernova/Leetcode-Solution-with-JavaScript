/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var help = function(a,b){
        let cur=a;
        let tmp=a;
        let pre=null;
        while(cur!=b){
            tmp=cur.next;
            cur.next=pre;
            pre=cur;
            cur=tmp;
        }
        return pre;
    }
var reverseKGroup = function(head, k) {
    
    
    if(!head){
        return null;
    }
    let a=head;
    let b=head;
    for(let i=0;i<k;i++){
        if(b==null){
            return head;
        }
        else{
            b=b.next;
        }
    }
    let newHead=help(a,b);
    a.next=reverseKGroup(b,k);
    return newHead;

};

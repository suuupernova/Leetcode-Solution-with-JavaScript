/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let m=new Map();
    let p=head;
    while(p){
        let node=new Node(p.val);
        m.set(p,node);
        p=p.next;
    }
    p=head;
    while(p){
        m.get(p).next=m.get(p.next)?m.get(p.next):null;
        m.get(p).random=m.get(p.random);
        p=p.next;
    }
    return m.get(head);
    
};

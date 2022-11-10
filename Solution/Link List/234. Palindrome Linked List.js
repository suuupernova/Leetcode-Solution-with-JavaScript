//1.空间复杂度O（n）时间复杂度O（n）
var isPalindrome = function(head) {
    let arr=[];
    while(head){
        arr.push(head.val);
        head=head.next;
    }
    for(let i=0,j=arr.length-1;i<=j;i++,j--){
        if(arr[i]!=arr[j]){
            return false;
        }
    }
    return true;

};
//2.空间复杂度O（1）时间复杂度O（n）
var isPalindrome = function(head) {
    if(head.next===null)return true;
    const firEnd=getHalf(head);
    const secStrat=reverse(firEnd.next);
    let n1=head;
    let n2=secStrat;
    let res=true;
    while(n2&&res){
        if(n1.val!==n2.val)res=false;
        n1=n1.next;
        n2=n2.next;
    }
    firEnd.next=reverse(secStrat);
    return res;


};
const getHalf=(node)=>{
    let slow=node;
    let fast=node;
    while(fast.next&&fast.next.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}
const reverse=(node)=>{
    let pre=null;
    let cur=node;
    while(cur){
        const next=cur.next;
        cur.next=pre;
        pre=cur;
        cur=next;
    }
    return pre;
}

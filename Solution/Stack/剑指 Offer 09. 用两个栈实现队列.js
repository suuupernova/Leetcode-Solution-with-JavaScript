//思路十分简单，构造两个栈来实现队列，一个用来push，一个用来pop

var CQueue = function() {
    this.in_stack=[];
    this.out_stack=[];
};

/** 
 * @param {number} value
 * @return {void}
 */

//队列的push操作在负责push的栈内push即可
CQueue.prototype.appendTail = function(value) {
    this.in_stack.push(value);

};

CQueue.prototype.deleteHead = function() {
    //如果负责pop的栈不为空，直接对负责pop的栈进行pop操作
    if(this.out_stack.length){
        return this.out_stack.pop();
    }
    //否则依序将负责push的栈中的元素依次push到负责pop的栈中
    else{
        while(this.in_stack.length){
            this.out_stack.push(this.in_stack.pop());
        }
        if(!this.out_stack.length){
            return -1;
        }
        return this.out_stack.pop();
    }
};

//这道题和剑指offer第九题一样，就是多了一个peek和empty
var MyQueue = function() {
    this.in_stack=[];
    this.out_stack=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.in_stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.out_stack.length){
        return this.out_stack.pop();
    }
    else{

        while(this.in_stack.length){
            this.out_stack.push(this.in_stack.pop());
        }
        return this.out_stack.pop();

    }
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
   if(!this.out_stack.length){
       while(this.in_stack.length){
            this.out_stack.push(this.in_stack.pop());
        }
   }
   return this.out_stack[this.out_stack.length-1];

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.in_stack.length===0&&this.out_stack.length===0;

};

//此题专门使用一个栈来维护最小值即可
var MinStack = function() {
    this.stack=[];
    this.min=[];

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(!this.min.length) this.min.push(val);
    else{
        this.min.push(Math.min(this.min[this.min.length-1],val));
    }
    

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    this.min.pop();  
    this.stack.pop();
    

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
    return this.min[this.min.length-1];
};

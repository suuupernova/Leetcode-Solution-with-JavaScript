var Trie = function() {
    this.children={};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node=this.children;
    for(let ch of word){
        if(!node[ch]){
            node[ch]={};
        }
        node=node[ch];
    }
    node.end=true;

};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node=this.children;
    for(let ch of word){
        if(!node[ch]){
            return false;
        }
        node=node[ch];
    }
    return !!node.end;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node=this.children;
    for(let ch of prefix){
        if(!node[ch]){
            return false;
        }
        node=node[ch];
    }
    return true;

};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

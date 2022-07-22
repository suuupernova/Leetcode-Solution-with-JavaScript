//剪枝
var isValidSudoku = function(board) {
    let row=[];
    let column=[];
    let box=[];

    for(let i=0;i<9;i++){
        row[i]=new Map();
        column[i]=new Map();
        box[i]=new Map();
    }

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let char=board[i][j];
            if(char=='.')continue;
            let block=Math.floor(j/3)+Math.floor(i/3)*3;
            if(row[i].has(char)||column[j].has(char)||box[block].has(char)) return false;
            else{
                row[i].set(char,1);
                column[j].set(char,1)
                box[block].set(char,1)
            }
        }
    }
    return true;
    

};

export function doneOrNot( board ) {
    //Insert your code here 
    for(let i=0;i<board.length;i++){
        for(let j =0;j< board[0].length; j++){
           if(!(checkRow(board,i,j) && checkColumn(board,i,j) && checkSquare(board,i,j))){
           return "Try again!";
       }
       }
       return "Finished!";
       }
}
function checkRow(board,n,m){
   for(let i=0;i< board[0].length;i++){
       if(i !== m )
       if(board[0][i] === board[0][m])
       return 0;
   }
   return 1;
}
function checkColumn(board,n,m){
for(let i=0;i< board.length;i++){
       if(i !== n )
       if(board[i][0] === board[n][0])
       return 0;
   }
   return 1;
}
function checkSquare(board, n, m){
 let startingColumnIndex = MATH.floor((m+1)/3) + (m+1)%3 +1;
 let startingRowIndex = MATH.floor((n+1)/3) + (n+1)%3 +1;
 for(let i=startingRowIndex;i< startingRowIndex+3;i++){
 for(let j = startingColumnIndex; j< startingColumnIndex+3; j++){
     if(i!== n && j !==m){
       if(board[i][j] === board[m][n]){
           return 0;
       }
   }
 }
 }
 return 1;
}
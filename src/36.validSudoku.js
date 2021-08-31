/**
 * @param {character[][]} board
 * @return {boolean}
 */
 export var isValidSudoku = function(board) {
  // check row & col
  for(let i = 0; i < 9; i++){
    const rowCheck = Array.from({length : 10}, () => 0)
    const colCheck = Array.from({length : 10}, () => 0)
    
    for(let j = 0; j < 9; j++){
      const curRow = board[j][i]
      const curCol = board[i][j]
      
      if(rowCheck[curRow] === 0) rowCheck[curRow] = 1
      else if(curRow === '.') {}
      else return false
      
      if(colCheck[curCol] === 0) colCheck[curCol] = 1
      else if(curCol === '.') {}
      else return false
    }
  }

  // subBox check
  for (let k = 0; k < 9; k += 3) {
    for (let f = 0; f < 9; f += 3) {
      const check = Array.from({length : 10}, () => 0)
      for (let i = 0 + f; i < 3 + f; i++) {        
        for (let j = 0 + k; j < 3 + k; j++) {
          const num = board[i][j];
          
          console.log(check[num])
          
          if(check[num] === 0) check[num] = 1;
          else if(num === '.') {}
          else return false
        }
      }
    }
  }

  return true
};
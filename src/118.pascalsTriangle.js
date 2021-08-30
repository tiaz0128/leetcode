/**
 * @param {number} numRows
 * @return {number[][]}
 */
export var generate = function(numRows) {
  const result = []
  for(let i = 1; i <= numRows; i++){
    let num = 1;
    const row = []
    for(let j = 1; j <= i; j++){
      row.push(num)
      num = num * (i - j) / j
    }  
    result.push(row)
  }
  return result
};

export var generate2 = function(numRows) {
  var pascal = [];
  for (var i = 0; i < numRows; i++) {
      pascal[i] = [];
      pascal[i][0] = 1;
      for (var j = 1; j < i; j++) {
          pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
      }
      pascal[i][i] = 1;
  }
  return pascal;
};
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
export var matrixReshape = function(mat, r, c) {
  const flatArr= mat.flat()
  
  if(flatArr.length !== r * c) return mat

  const result = []

  let k = 0
  for(let i = 0; i < r; i++){
    const row = []
    for(let j = 0; j < c; j++){
      row.push(flatArr[k++])
    }
    result.push(row)
  }

  console.log(result)
  return result;
};

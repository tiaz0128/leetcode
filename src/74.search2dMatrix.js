/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 export var searchMatrix = function(matrix, target) {
  return matrix.some(row => {
    
    if(target >= row[0] && target <= row[row.length - 1]){
      let lt = 0, rt = row.length
      
      while(lt <= rt){
        let mid = parseInt((lt + rt) / 2)

        if(row[mid] === target) return true
        
        if(row[mid] > target) rt = mid - 1
        if(row[mid] < target) lt = mid + 1
      }
    }
  })
};
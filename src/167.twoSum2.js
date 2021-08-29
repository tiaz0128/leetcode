/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 export var twoSum = function(numbers, target) {
  let lt = 0, rt = numbers.length - 1, idx = -1;

  for(lt = 0; lt < rt; lt++){
    const num2 = target - numbers[lt]
    const mid = parseInt((lt + rt) / 2 + 1)
    
    if(numbers[mid] === num2) {
      rt = mid
      break;
    }

    if(numbers[mid] > num2) {
      rt = mid - 1
    } 
    
    if(numbers[rt] < num2){
      continue;
    }
    
    idx = numbers.lastIndexOf(num2, rt)
    
    if(idx !== -1){
      rt = idx
      break;
    }
  }

  return [lt + 1, rt + 1]
};
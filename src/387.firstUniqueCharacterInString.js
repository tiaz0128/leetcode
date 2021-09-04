/**
 * @param {string} s
 * @return {number}
 */
 export var firstUniqChar = function(s) {
  let result = -1
  return [...s].some((ch, idx) => {
    if(s.indexOf(ch) === idx && s.lastIndexOf(ch) === idx) {
      result = idx
      return true
    } 
    return false
  }) ? result : -1 
  
};
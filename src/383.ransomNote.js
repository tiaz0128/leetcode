/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 export var canConstruct = function(ransomNote, magazine) {
  const origin = [...magazine]
  return ![...ransomNote].some(ch => {
    const idx = origin.indexOf(ch)
    if(idx === -1) return true
    
    origin.splice(idx, 1)
    return false
  })
};
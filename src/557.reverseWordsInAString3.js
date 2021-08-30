/**
 * @param {string} s
 * @return {string}
 */
 export var reverseWords = function(s) {
  return s.split(' ').map(s => [...s].reverse().join('') ).join(' ')
};
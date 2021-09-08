/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 export var levelOrder = function(root) {
  const result = [[]]
  
  if(root === null) return []

  function DFS(level, target){
    if(target === null) return
    
    if(result[level] === undefined){
      result[level] = []
    }
    result[level].push(target.val)
    
    if(!(target.left || target.right)){
      return 
    } else {      
      DFS(level + 1, target.left)
      DFS(level + 1, target.right)
    }
  }
  DFS(0, root)
  
  return result
};
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
 * @return {number[]}
 */
 export var preorderTraversal = function(root) {
  const tmp = []
  
  function DFS(target){
    if(target === null){
       return 
     }else {
      tmp.push(target.val)
      DFS(target.left)
      DFS(target.right)
     }
  }
  DFS(root)
  
  return tmp
};
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
 export var postorderTraversal = function(root) {
  const tmp = []
  
  function DFS(target){
    if(target === null){
       return 
     }else {
      DFS(target.left)
      DFS(target.right)
      tmp.push(target.val)
     }
  }
  DFS(root)
  
  return tmp
};
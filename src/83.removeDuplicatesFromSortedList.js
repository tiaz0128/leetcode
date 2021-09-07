/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export var deleteDuplicates = function(head) {
  let target = head
  let prev = head
  const map = new Map
  
  while(target){
    if(prev.val === target.val){
      prev.next = target.next
    } else {
      prev = prev.next
    }
    
    target = target.next
  }
  
  return head
};
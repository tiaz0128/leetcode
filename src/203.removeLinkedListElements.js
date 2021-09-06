/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
export var removeElements = function(head, val) {
  if(!head) return head

  let target = head 
  let prev = head
    
  while(target){
    if(target.val === val) {
      target = target.next
      prev.next = target
    } else {
      prev = target
      target = target.next
    }
  }

return head.val === val ? head.next : head
};
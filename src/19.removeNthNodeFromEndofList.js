/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 export var removeNthFromEnd = function(head, n) {
  
  let len = 1;
  let target = head
  while(target.next){
    target = target.next
    len++; 
  }
  
  
  let idx = len - n + 1
  let i = 1;
  let prev = head;
  
  if(len === 1) return head.next = null
  if(idx === 1) return head = head.next
  
  target = head
  while(i <= idx){
    if(i === idx - 1) prev = target
    target = target.next
    i++
  }
  prev.next = target
  
  return head
};

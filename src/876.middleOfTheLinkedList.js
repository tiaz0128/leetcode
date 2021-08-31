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
 export var middleNode = function(head) {
  let cnt = 1
  let target = head
  
  while(target.next){
    target = target.next
    cnt++;
  }
  
  target = head
  
  const mid = parseInt(cnt / 2)
  let i = 1  
  while(i <= mid){
    target = target.next
    i++
  }
  return target
};
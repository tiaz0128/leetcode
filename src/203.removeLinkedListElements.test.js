
import { removeElements } from './203.removeLinkedListElements'

test.each`
               head  |   val | expected
  ${[1,2,6,3,4,5,6]} |  ${6} | ${[1,2,3,4,5]}
  ${[7, 7, 7, 7]}    |  ${7} | ${[]}
  `('$nums 배열 순서를 유지하면서 0만 뒤로 보내면 $expected', ({nums, expected}) => {
    expect(removeElements(head, val)).toEqual(expected);
  });
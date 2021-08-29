
import { moveZeroes } from './283.moveZeroes'

test.each`
             nums | expected
  ${[0,1,0,3,12]} | ${[1,3,12,0,0]}
  ${[0, 0, 0, ]}  | ${[0, 0, 0]}
  ${[0, 0, 0, 23, 1, -1]} | ${[23, 1, -1, 0, 0, 0]}
  `('$nums 배열 순서를 유지하면서 0만 뒤로 보내면 $expected', ({nums, expected}) => {
    expect(moveZeroes(nums)).toEqual(expected);
  });
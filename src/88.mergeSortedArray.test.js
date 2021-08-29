import { merge } from "./88.mergeSortedArray"

test.each`
 nums1 | m | nums2 | n | expected
 ${[1,2,3,0,0,0]} | ${3} | ${[2,5,6]} ${3} | ${[1,2,2,3,5,6]}
 ${[-1,0,0,3,3,3,0,0,0]} | ${6} | ${[1,2,2]} | ${3} | ${[-1,0,0,1,2,2,3,3,3]}
`('$nums1 에서 $nums2 의 길이 만큼 0을 지우고 삽입하면 $expected', ({nums1, m, nums2, n, expected}) => {
  expect(merge(nums1, m, nums2, n)).toEqual(expected)
})
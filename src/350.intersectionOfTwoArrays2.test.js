import { intersect } from './350.intersectionOfTwoArrays2'

test.each`
nums1     | nums2       | expected
${[1,2,2,1]} | ${[2,2]      } | ${[2,2]}
${[4,9,5]  } | ${[9,4,9,8,4]} | ${[9,4]}
`('$nums1 $nums2 $expected', ({nums1, nums2, expected}) => {
  expect(intersect(nums1, nums2)).toEqual(expected)
})
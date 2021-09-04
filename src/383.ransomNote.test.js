import { canConstruct } from './383.ransomNote'

test.each`
 ransomNote   | magazine    | expected
      ${"aa"} |    ${"ab"}  | ${false}
      ${"aa"} |    ${"aab"} | ${true}
`('$nums1 $nums2 $expected', ({ransomNote, magazine, expected}) => {
  expect(canConstruct(ransomNote, magazine)).toEqual(expected)
})

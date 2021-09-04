import { firstUniqChar } from './387.firstUniqueCharacterInString'

test.each`
        s     | expected
${"leetcode"} | ${0}
`('중복되지 않는 첫번째 문자의 인덱스값은 $expected', ({s, expected}) => {
  expect(firstUniqChar(s)).toEqual(expected)
})

test.each`
    s     | expected
${"aabb"} | ${-1}
`('유니크한 문자열이 없는 경우는 $expected', ({s, expected}) => {
  expect(firstUniqChar(s)).toEqual(expected)
})
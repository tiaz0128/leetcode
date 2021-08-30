import { reverseWords } from './557.reverseWordsInAString3'

test.each`
                           s     | expected
${"Let's take LeetCode contest"} | ${"s'teL ekat edoCteeL tsetnoc"}
`('$s 문자열을 띄어쓰기 단위로 뒤집으면  $expected', ({s, expected}) => {
  expect(reverseWords(s)).toEqual(expected)
})
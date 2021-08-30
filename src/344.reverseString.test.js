import { reverseString, reverseString2 } from "./344.reverseString"

describe.each`
                       s | expected
${["h","e","l","l","o"]} | ${["o","l","l","e","h"]}
`
('ㄷㅅ', ({s, expected}) => {

  test('문자열 뒤집기', () => {
    expect(reverseString(s)).toEqual(expected)
  })
})

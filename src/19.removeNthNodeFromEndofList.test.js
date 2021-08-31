import { removeNthFromEnd } from "./19.removeNthNodeFromEndofList"

test.each`
          head |    n | expected
${[1,2,3,4,5]} | ${2} | ${[1,2,3,5]}
`
(`$head 에서 뒤에서 $n 번째 링크를 삭제하면 $expcted`, ({head, n, expected}) => {
  expect(removeNthFromEnd(head, n)).toEqual(expected)
})

import { middleNode } from "./876.middleOfTheLinkedList"

test.each`
head | expected
${[1,2,3,4,5]} | ${[3,4,5]}
`
(`$head 의 가운데에서 부터 배열은 $expcted`, ({head, expected}) => {
  expect(middleNode(head)).toEqual(expected)
})

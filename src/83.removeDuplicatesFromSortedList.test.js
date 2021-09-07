import { deleteDuplicates } from "./83.removeDuplicatesFromSortedList"

test.each`
        head  | expected
${[1,1,1]}     | ${[1]}
${[1,1,2,3,3]} | ${[1,2,3]}
`('$head 에서 중복을 제거한 결과 $expected', ({head, expected}) => {
  expect(deleteDuplicates(head)).toEqual(expected)
})
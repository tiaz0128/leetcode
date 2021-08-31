import { searchMatrix } from "./74.search2dMatrix"

test.each`
                                   matrix  | target | expected
${[[1,3,5,7],[10,11,16,20],[23,30,34,60]]} | ${3}   | ${true}
${[[1,3,5,7],[10,11,16,20],[23,30,34,60]]} | ${13}  | ${false}
`('$matrix 에서 $target 값이 있는지 없는지', ({matrix, target, expected}) => {
  expect(searchMatrix(matrix, target)).toEqual(expected)
}) 
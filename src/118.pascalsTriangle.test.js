import { generate, generate2 } from './118.pascalsTriangle'

describe.each
`
numRows | expected
${1}    | ${[[1]]}
${2}    | ${[[1], [1,1]]}
${5}    | ${[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]}
`
('n = $numRows 인 파스칼 삼각형', ({numRows, expected}) => {
  test('generate 1', () => {
    expect(generate(numRows)).toEqual(expected)
  })

  test('generate 2', () => {
    expect(generate2(numRows)).toEqual(expected)
  })
})




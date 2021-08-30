import { matrixReshape } from "./566.reshapeTheMatrix"

test.each`
             mat |    r |    c | expected
${[[1,2],[3,4]]} | ${2} | ${4} | ${[[1,2],[3,4]]}
${[[1,2],[3,4]]} | ${1} | ${4} | ${[[1,2,3,4]]}
${[[1,2,3],[4,5,6,]]} | ${3} | ${2} | ${[[1,2],[3,4],[5,6]]}
`
(`행렬 변경`, ({mat, r, c, expected}) => {
  expect(matrixReshape(mat, r, c)).toEqual(expected)
})

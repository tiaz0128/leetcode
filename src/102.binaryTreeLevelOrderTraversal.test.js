import { levelOrder } from './102.binaryTreeLevelOrderTraversal'

test.each
`
                    numRows | expected
${[3,9,20,null,null,15,7]}  | ${[[3],[9,20],[15,7]]}
                    ${[1]}  | ${[[1]]}
`
('generate 1', ({root, expected}) => {
    expect(levelOrder(root)).toEqual(expected)
})

import { postorderTraversal } from "./145.binaryTreePostorderTraversal"

test.each`
          root  | expected
${[1,null,2,3]} | ${[3,2,1]}
`
('Postorder Traversal 후위순회 출력 결과는 $expected', ({root, expected}) => {
  expect(preorderTraversal(root)).toEqual(expected)
})

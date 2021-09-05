import { preorderTraversal } from "./144.binaryTreePreorderTraversal"

test.each`
          root  | expected
${[1,null,2,3]} | ${[1,2,3]}
`
('Preorder Traversal 전위순회의 출력 결과는 $expected', ({root, expected}) => {
  expect(preorderTraversal(root)).toEqual(expected)
})

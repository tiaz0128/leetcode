import { inorderTraversal } from "./94.binaryTreeInorderTraversal"

test.each`
          root  | expected
${[1,null,2,3]} | ${[1,3,2]}
`
('Inorder Traversal 중위순회의 출력 결과는 $expected', ({root, expected}) => {
  expect(inorderTraversal(root)).toEqual(expected)
})

# leetcode & Jest
- [leetcode](https://leetcode.com) 알고리즘 문제를 정리한다.
- `Jest` 를 이용하여 test case 를 추가한다.

<p align="center">
  <img src="./img/title.png" height="180">
</p>

<br/>

## LeetCode Stats
<p>
  <a href="https://leetcode.com/tiaz0128/">
    <img src="https://leetcode-stats-six.vercel.app/api?username=tiaz0128&theme=dark"/>
  </a>
</p>


<br/>

## Jest 설치
```bash
$ npm init -y

$ npm install --save-dev jest 
```
`npm` 대신 `yarn` 으로 설치해도 된다.
```bash
$ yarn add --dev jest
```

<br/>

## import / export 를 위한 babel 설치
- ES6 import / export 키워드를 쓰기 위해서는 `babel` 을 추가 설치한다.
- package.json 에서 babel 을 확인하자.
- `require`를 이용하면 `babel` 설치 및 설정은 하지 않아도 된다.

```bash
$ npm install -D @types/jest @babel/core @babel/preset-env
```

`package.json` 에서 `babel`을 확인하자

```json
  "devDependencies": {
    "@babel/core": "^7.15.0",
    "@babel/preset-env": "^7.15.0",
    "@types/jest": "^27.0.1",
    "jest": "^27.1.0"
  }
```

<br/>

## babel & Jest 설정 파일 생성 및 작성
`.babelrc.json` 생성

```json
{
  "presets": ["@babel/preset-env"]
}
```

`jest.config.json` 생성

```json
{
  "collectCoverage": true,
  "moduleFileExtensions": ["js", "mjs"],
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.mjs$": "babel-jest"
  },
  "testRegex": "((\\.|/*.)(test))\\.js?$"
}
```

<br/>

## `package.json` 수정

```json
"scripts": {
    "test": "jest"
  },
```

<br/>

## test 실행
- `npm test` 로 전체 테스트 파일을 실행 할 수 있다.
- 파일명을 입력하면 해당하는 테스트 파일만 실행한다.

```bash
$ npm test

$ npm test ./src/sum.test.js

$ npm test sum.test.js
```
<br/>

## solution

|  No | problems | difficulty | src | Related Topics | 
| --- | -------- | ---------- | --- | -------------- |
| 102 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | Medium | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/102.binaryTreeLevelOrderTraversal.js)  | `Tree` `Breadth-First Search` `Binary Tree` |
| 83  | [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/83.removeDuplicatesFromSortedList.js)  | `Linked List` |
| 203 | [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/203.removeLinkedListElements.js)  | `Linked List` `Recursion` |
| 145 | [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/145.binaryTreePostorderTraversal.js)  | `Stack` `Tree` `Depth-First Search` `Binary Tree` |
| 94 | [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/94.binaryTreeInorderTraversal.js)  | `Stack` `Tree` `Depth-First Search` `Binary Tree` |
| 144 | [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/144.binaryTreePreorderTraversal.js)  | `Stack` `Tree` `Depth-First Search` `Binary Tree` |
| 383 | [Ransom Note](https://leetcode.com/problems/ransom-note/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/383.ransomNote.js)  | `Hash Table` `String` `Counting` |
| 387 | [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/387.firstUniqueCharacterInString.js)  | `Hash Table` `String` `Queue` `Counting` |
| 74  | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | Medium | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/74.search2dMatrix.js)  | `Array` `Matrix` `Binary Search` |
| 36  | [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) | Medium | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/36.validSudoku.js)  | `Array`  `Matrix` `Hash Table` |
| 19  | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Medium | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/19.removeNthNodeFromEndofList.js)  | `Linked List` `Two Pointer` |
| 876 | [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/876.middleOfTheLinkedList.js)  | `Linked List` `Two Pointer` |
| 189 | [Rotate Array](https://leetcode.com/problems/rotate-array/) | Medium | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/189.rotateArray.js)  | `Array` |
| 283 | [Move Zeroes](https://leetcode.com/problems/move-zeroes/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/283.moveZeroes.js)  | `Array` `Two Pointer` |
| 167 | [Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/167.twoSum2.js) | `Array` `Two Pointers` `Binary Search` |
| 88 | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/88.mergeSortedArray.js)  | `Array` `Two Pointers` `Sorting` |
| 350 | [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/350.intersectionOfTwoArrays2.js)  | `Array` `Hash Table` `Two Pointers` |
| 121 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/121.bestTimetoBuyandSellStock.js)  | `Array` `Dynamic Programming` |
| 566 | [Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/566.reshapeTheMatrix.js)  | `Array` `Matrix` `Simulation` |
| 118 | [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/118.pascalsTriangle.js)  | `Array`  `Dynamic Programming` |
| 344 | [Reverse String](https://leetcode.com/problems/reverse-string/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/344.reverseString.js)  | `String`  `Two Pointers` `Recursion` |
| 557 | [Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/) | Easy | [📄](https://github.com/tiaz0128/leetcode/blob/master/src/557.reverseWordsInAString3.js)  | `String`  `Two Pointers` |
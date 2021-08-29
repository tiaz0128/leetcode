import { twoSum } from "./167.twoSum2"

test.each`
             a | target | expected
${[2,7,11,15]} | ${9}   | ${[1,2]}
${[2,3,4]}     | ${6}   | ${[1,3]}
${[0,0,3,4]}   | ${0}   | ${[1,2]}
${[5,25,75]}   | ${100} | ${[2,3]}
${[1,3,4,4]}   | ${8}   | ${[3,4]}
`
('더해서 $target 이 되는 두수의 배열의 위치 $expected', ({a, target, expected}) => {
  expect(twoSum(a, target)).toEqual(expected)
})

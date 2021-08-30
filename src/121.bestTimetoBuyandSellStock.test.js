import { maxProfit } from "./121.bestTimetoBuyandSellStock"

test.each`
prices | expected
${[7,1,5,3,6,4]} | ${5}
${[7,6,4,3,1]}   | ${0}
`
('$prices 중에서 가장 이득을 볼수 있는 차익은 $expected', ({prices, expected}) => {
  expect(maxProfit(prices)).toBe(expected)
})
import { sum } from "./sum"

test('1 + 2 는 3 이다.', () => {
  expect(sum(1, 2)).toBe(3)
})

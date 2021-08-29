import { rotate } from "./189.rotateArray"

test.each`
                   a |   b  | expected
  ${[1,2,3,4,5,6,7]} | ${3} | ${[5,6,7,1,2,3,4]}
  ${[1,2]}           | ${5} | ${[2,1]}
  `('$a 배열을 $b번 회전시키면 $expected', ({a, b, expected}) => {
    expect(rotate(a, b)).toEqual(expected);
  });

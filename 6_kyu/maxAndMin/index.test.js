const maxAndMin = require(".");

test("It should works for basic tests", () => {
  expect(maxAndMin([3, 10, 5], [3, 10, 5])).toEqual([7, 0]);
  expect(maxAndMin([3, 10, 5], [20, 7, 15, 8])).toEqual([17, 2]);
  expect(maxAndMin([3], [20])).toEqual([17, 17]);
  expect(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual([9, 1]);
});

test("With negative numbers ", () => {
  const ar1 = [-870, 91, -141, -739, 707, -803, -195, -963, 99, 861];
  const ar2 = [796, -468, 889, 58, -765, -901, -311, -399, -764, -181];

  expect(maxAndMin(ar1, ar2)).toEqual([1852, 14]);
});

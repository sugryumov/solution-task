const productArray = require(".");

test("Basic tests", () => {
  expect(productArray([12, 20])).toEqual([20, 12]);
  expect(productArray([3, 27, 4, 2])).toEqual([216, 24, 162, 324]);
  expect(productArray([13, 10, 5, 2, 9])).toEqual([
    900,
    1170,
    2340,
    5850,
    1300,
  ]);
});

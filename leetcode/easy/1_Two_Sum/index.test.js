const twoSum = require(".");

test("test [2,7,11,15]", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("test [3,2,4]", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("test [3,3]", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

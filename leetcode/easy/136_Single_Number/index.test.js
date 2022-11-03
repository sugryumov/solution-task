const singleNumber = require(".");

test("test [2,2,1]", () => {
  expect(singleNumber([2, 2, 1])).toEqual("1");
});

test("test [4,1,2,1,2]", () => {
  expect(singleNumber([4, 1, 2, 1, 2])).toEqual("4");
});

test("test [1]", () => {
  expect(singleNumber([1])).toEqual("1");
});

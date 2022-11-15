const reverse = require(".");

test("test 123", () => {
  expect(reverse(123)).toEqual(321);
});

test("test -123", () => {
  expect(reverse(-123)).toEqual(-321);
});

test("test 120", () => {
  expect(reverse(120)).toEqual(21);
});

test("test 1534236469", () => {
  expect(reverse(1534236469)).toEqual(0);
});

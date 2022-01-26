const isValid = require(".");

test("test ()", () => {
  expect(isValid("()")).toEqual(true);
});

test("test ()[]{}", () => {
  expect(isValid("()[]{}")).toEqual(true);
});

test("test (]", () => {
  expect(isValid("(]")).toEqual(false);
});

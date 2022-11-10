const removeDuplicates = require(".");

test("test 'abbaca'", () => {
  expect(removeDuplicates("abbaca")).toEqual("ca");
});

test("test 'azxxzy'", () => {
  expect(removeDuplicates("azxxzy")).toEqual("ay");
});

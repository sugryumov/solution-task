const removeUrlAnchor = require(".");

test("Basic tests", () => {
  expect(removeUrlAnchor("www.codewars.com#about")).toBe("www.codewars.com");
  expect(removeUrlAnchor("codewars.com?page=1")).toBe("codewars.com?page=1");
});

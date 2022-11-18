const isPalindrome = require(".");

test("test 'A man, a plan, a canal: Panama'", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
});

test("test 'race a car'", () => {
  expect(isPalindrome("race a car")).toEqual(false);
});

test("test ' '", () => {
  expect(isPalindrome(" ")).toEqual(true);
});

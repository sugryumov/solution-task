const isAnagram = require(".");

test("test anagram and nagaram", () => {
  expect(isAnagram("anagram", "nagaram")).toEqual(true);
});

test("test rat and car", () => {
  expect(isAnagram("rat", "car")).toEqual(false);
});

const strStr = require(".");

test("test haystack = 'sadbutsad', needle = 'sad'", () => {
  expect(strStr("sadbutsad", "sad")).toEqual(0);
});

test("test haystack = 'leetcode', needle = 'leeto'", () => {
  expect(strStr("leetcode", "leeto")).toEqual(-1);
});

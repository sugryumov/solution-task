const firstUniqChar = require(".");

test("test 'leetcode'", () => {
  expect(firstUniqChar("leetcode")).toEqual(0);
});

test("test 'loveleetcode'", () => {
  expect(firstUniqChar("loveleetcode")).toEqual(2);
});

test("test 'aabb'", () => {
  expect(firstUniqChar("aabb")).toEqual(-1);
});

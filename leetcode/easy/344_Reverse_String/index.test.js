const reverseString = require(".");

test("test ['h','e','l','l','o']", () => {
  expect(reverseString(["h", "e", "l", "l", "o"])).toEqual([
    "o",
    "l",
    "l",
    "e",
    "h",
  ]);
});

test("test ['H','a','n','n','a','h']", () => {
  expect(reverseString(["H", "a", "n", "n", "a", "h"])).toEqual([
    "h",
    "a",
    "n",
    "n",
    "a",
    "H",
  ]);
});

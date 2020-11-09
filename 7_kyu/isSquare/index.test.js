const isSquare = require(".");

test("-1: Negative numbers cannot be square numbers", () => {
  expect(isSquare(-1)).toEqual(false);
});

test("0 is a square number (0 * 0)", () => {
  expect(isSquare(0)).toEqual(true);
});

test("3 is not a square number", () => {
  expect(isSquare(3)).toEqual(false);
});

test("4 is a square number (2 * 2)", () => {
  expect(isSquare(4)).toEqual(true);
});

test("25 is a square number (5 * 5)", () => {
  expect(isSquare(25)).toEqual(true);
});

test("26 is not a square number", () => {
  expect(isSquare(26)).toEqual(false);
});

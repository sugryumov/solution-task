const evensAndOdds = require(".");

test("If a number is even, convert it to binary", () => {
  expect(evensAndOdds(2)).toEqual("10");
});

test("If a number is odd, convert it to hex", () => {
  expect(evensAndOdds(13)).toEqual("d");
});

const jumpingNumber = require(".");

test("Basic tests", () => {
  expect(jumpingNumber(1)).toBe("Jumping!!");
  expect(jumpingNumber(9)).toBe("Jumping!!");
  expect(jumpingNumber(23)).toBe("Jumping!!");
  expect(jumpingNumber(554)).toBe("Jumping!!");
  expect(jumpingNumber(79)).toBe("Not!!");
  expect(jumpingNumber(556847)).toBe("Not!!");
  expect(jumpingNumber(98789876)).toBe("Jumping!!");
});

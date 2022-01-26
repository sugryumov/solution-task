const tidyNumber = require(".");

test("Basic tests", () => {
  expect(tidyNumber(12)).toEqual(true);
  expect(tidyNumber(102)).toEqual(false);
  expect(tidyNumber(9672)).toEqual(false);
  expect(tidyNumber(2789)).toEqual(true);
  expect(tidyNumber(2335)).toEqual(true);
  expect(tidyNumber(7765737)).toEqual(false);
});

const minOperations = require(".");

test('test ["d1/","d2/","../","d21/","./"]', () => {
  expect(minOperations(["d1/", "d2/", "../", "d21/", "./"])).toEqual(2);
});

test('test ["d1/","d2/","./","d3/","../","d31/"]', () => {
  expect(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"])).toEqual(3);
});

test('test ["d1/","../","../","../"]', () => {
  expect(minOperations(["d1/", "../", "../", "../"])).toEqual(0);
});

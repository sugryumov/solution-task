/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */

const brackets = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const isValid = function (str) {
  if (str.length % 2 !== 0) {
    return false;
  }

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (brackets[currentChar]) {
      stack.push(brackets[currentChar]);
    } else {
      const removeBr = stack.pop();

      if (currentChar !== removeBr) {
        return false;
      }
    }
  }

  return !stack.length;
};

module.exports = isValid;

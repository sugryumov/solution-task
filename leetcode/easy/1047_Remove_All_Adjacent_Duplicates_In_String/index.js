/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
 *
 * @param {string} s
 * @return {string}
 */

const removeDuplicates = function (s) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === result[result.length - 1]) {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  return result.join("");
};

module.exports = removeDuplicates;

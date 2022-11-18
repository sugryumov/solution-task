/**
 * https://leetcode.com/problems/valid-palindrome/
 *
 * @param {string} s
 * @return {boolean}
 */

const regxp = /[^a-z0-9]/gi;

const isPalindrome = function (s) {
  const lowerString = s.toLowerCase("").replaceAll(regxp, "");
  const reverseString = lowerString.split("").reverse().join("");

  return lowerString === reverseString;
};

module.exports = isPalindrome;
